import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import DatePicker from './DatePicker';

import api from '../../services/api';
import history from '../../services/history';

import BannerInput from './BannerInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do meetup é obrigatório.'),
  description: Yup.string().required('A descrição do meetup é obrigatória.'),
  location: Yup.string().required('A localização do meetup é obrigatória.'),
  date: Yup.date().required('A data do meetup é obrigatória.'),
  banner_id: Yup.number().required('A imagem do meetup é obrigatória.'),
});

export default function CreateEdit({ match }) {
  const [loading, setLoading] = useState(false);
  const { params } = match;
  const meetup =
    useSelector(state => ({
      ...state.meetup[params.id],
      date: state.meetup[params.id] && parseISO(state.meetup[params.id].date),
    })) || {};

  if (params['0'] === 'edit' && !params.id) {
    return <Redirect to="/create" />;
  }

  const handleSubmit = async data => {
    try {
      setLoading(true);

      if (!params.id) {
        await api.post('meetups', data);
      } else {
        await api.put(`meetups/${params.id}`, data);
      }

      history.push('/');

      toast.success(
        `Meetup ${params.id ? 'atualizado' : 'criado'} com sucesso.`
      );
    } catch (e) {
      toast.error('Ocorre um erro enquanto o meetup era salvo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="name" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" />
        <Input name="location" placeholder="Localização" />
        <div>
          <button type="submit" disabled={loading}>
            {loading ? (
              'Salvando...'
            ) : (
              <>
                <MdAddCircleOutline size={20} color="#fff" />
                Salvar Meetup
              </>
            )}
          </button>
        </div>
      </Form>
    </Container>
  );
}

CreateEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
