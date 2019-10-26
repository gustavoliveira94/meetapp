import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { loadMeetup } from '../../store/modules/meetup/actions';

import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await api.get('schedule');

        const data = response.data.map(meetup => ({
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "d 'de' MMMM', às' H'h'",
            {
              locale: pt,
            }
          ),
        }));

        dispatch(loadMeetup(data));

        setMeetups(data);
      } catch (e) {
        toast.error('Ocorreu um erro enquanto os meetups eram carregados.');
      }
    };

    fetchMeetups();
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/create">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Link>
      </header>
      <ul>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <p>{meetup.name}</p>
            <div>
              <p>{meetup.formattedDate}</p>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
