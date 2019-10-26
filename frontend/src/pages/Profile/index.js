import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Digite um email válido'),
  oldPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('A senha antiga é obrigatória para atualizar.')
      : field
  ),
  password: Yup.string(),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('A confirmação de senha é obrigatória.')
          .oneOf(
            [Yup.ref('password')],
            'A senha confirmada é diferente da nova senha'
          )
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  const handleSubmit = data => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <Container>
      <Form schema={schema} initialData={user} onSubmit={handleSubmit}>
        <Input name="fullname" placeholder="Digite seu nome completo" />
        <Input name="username" placeholder="Digite seu usário" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Digite sua senha atual"
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
