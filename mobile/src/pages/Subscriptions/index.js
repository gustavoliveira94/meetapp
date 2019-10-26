import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { FlatList, Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { HOST_URL } from 'react-native-dotenv';

import api from '../../services/api';

import Meetup from '../../components/Meetup';

import { Container, NoMeetupText } from './styles';

export default function Subscriptions() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      const response = await api.get('/attend');

      const data = response.data.map(meetup => ({
        ...meetup,
        meetup: {
          ...meetup.meetup,
          formattedDate: format(
            parseISO(meetup.meetup.date),
            "d 'de' MMMM', às' H'h'",
            {
              locale: pt,
            }
          ),
          banner: {
            ...meetup.meetup.banner,
            url: meetup.meetup.banner.url.replace('localhost', HOST_URL),
          },
        },
      }));

      setMeetups(data);
    }

    fetchMeetups();
  }, [meetups]);

  const cancelSubscription = async id => {
    try {
      await api.delete(`/register/${id}`);

      Alert.alert('Inscrição cancelada com sucesso.');

      setMeetups(meetups.filter(meetup => meetup.meetup.id !== id));
    } catch (e) {
      console.tron.log(e);
      Alert.alert(
        'Um erro ocorreu enquanto a inscrição era cancelada. Tente novamente.'
      );
    }
  };

  return (
    <Container>
      {meetups.length === 0 ? (
        <NoMeetupText>
          Você ainda não se inscreveu em nenhum meetup.
        </NoMeetupText>
      ) : (
        <FlatList
          keyExtractor={meetup => String(meetup.id)}
          data={meetups}
          renderItem={({ item }) => (
            <Meetup
              meetup={item.meetup}
              cancel={() => cancelSubscription(item.meetup.id)}
              isCancel
            />
          )}
        />
      )}
    </Container>
  );
}

function tabBarIcon({ tintColor }) {
  return <Icon name="local-offer" size={20} color={tintColor} />;
}

Subscriptions.navigationOptions = {
  tabBarIcon,
  tabBarLabel: 'Inscrições',
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
