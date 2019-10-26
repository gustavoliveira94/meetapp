import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { Container, EditButton, CancelButton } from './styles';

export default function Details({ match }) {
  const [loading, setLoading] = useState(false);
  const { id } = match.params;
  const meetup = useSelector(state => state.meetup[id]);

  const handleCancel = async () => {
    try {
      setLoading(true);

      await api.delete(`meetups/${id}`);

      history.push('/');

      toast.success('Meetup cancelado com sucesso.');
    } catch (e) {
      toast.error('Um erro ocorreu ao cancelar o meetup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <header>
        <h1>{meetup.name}</h1>
        <div>
          <EditButton to={`/edit/${id}`}>
            <MdEdit size={20} color="#fff" />
            Editar
          </EditButton>
          <CancelButton disabled={loading} onClick={handleCancel}>
            {loading ? (
              'Cancelando...'
            ) : (
              <>
                <MdDeleteForever size={20} color="#fff" />
                Cancelar
              </>
            )}
          </CancelButton>
        </div>
      </header>
      <img src={meetup.banner.url} alt={meetup.name} />
      <p>{meetup.description}</p>
      <div>
        <p>
          <MdEvent size={20} color="#fff" />
          {meetup.formattedDate}
        </p>
        <p>
          <MdPlace size={20} color="#fff" />
          {meetup.location}
        </p>
      </div>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
