import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signInRequest } from '../../store/modules/auth/actions';

import { Wrapper, Container } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido.')
    .required('O email é obrigatório.'),
  password: Yup.string()
    .required('A senha é obrigatória.')
    .min(6, 'A senha deve conter ao menos 6 caracteres.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="MeetApp logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Acessar'}
          </button>
        </Form>
        <Link to="/register">Criar conta</Link>
      </Container>
    </Wrapper>
  );
}
