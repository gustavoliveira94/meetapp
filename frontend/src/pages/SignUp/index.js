import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signUpRequest } from '../../store/modules/auth/actions';

import { Wrapper, Container } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  fullname: Yup.string().required('O nome é obrigatório.'),
  username: Yup.string().required('O usuário é obrigatório.'),
  email: Yup.string()
    .email('Digite um email válido.')
    .required('O email é obrigatório.'),
  password: Yup.string()
    .required('A senha é obrigatória.')
    .min(6, 'A senha deve conter ao menos 6 caracteres.'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ fullname, username, email, password }) => {
    dispatch(signUpRequest(fullname, username, email, password));
  };

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="MeetApp logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="fullname" placeholder="Digite seu nome completo" />
          <Input name="username" placeholder="Digite seu nome de usuário" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
        </Form>
        <Link to="/">Já possuo conta</Link>
      </Container>
    </Wrapper>
  );
}
