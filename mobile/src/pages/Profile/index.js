import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import { signOut } from '../../store/modules/auth/actions';
import { updateRequest } from '../../store/modules/user/actions';

import {
  Container,
  Form,
  TextInput,
  SubmitButton,
  SubmitButtonText,
  LogoutButton,
  Bar,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updateProfile = () => {
    const payload = {
      fullname,
      username,
      email,
      oldPassword,
      password,
      confirmPassword,
    };

    console.tron.log(payload);

    const schema = Yup.object().shape({
      fullname: Yup.string(),
      username: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPass, field) =>
          oldPass ? field.required() : field
        ),
      confirmPassword: Yup.string()
        .min(6)
        .when('password', (pass, field) =>
          pass ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!schema.isValid(payload)) {
      Alert.alert('Os dados passados estão inválidos.');
    } else {
      dispatch(updateRequest(payload));

      setOldPassword('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const logout = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    setFullname(profile.fullname);
    setUsername(profile.username);
    setEmail(profile.email);
  }, [profile]);

  return (
    <Container>
      <Form>
        <TextInput
          placeholder="Digite seu nome"
          autoCapitalize="words"
          onChangeText={setFullname}
          value={fullname}
        />
        <TextInput
          placeholder="Digite seu usuário"
          autoCapitalize="none"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <Bar />
        <TextInput
          placeholder="Digite a senha atual"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setOldPassword}
          value={oldPassword}
        />
        <TextInput
          placeholder="Digite a nova senha"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          placeholder="Confirme a nova senha"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <SubmitButton onPress={updateProfile}>
          <SubmitButtonText>Salvar perfil</SubmitButtonText>
        </SubmitButton>
        <LogoutButton onPress={logout}>
          <SubmitButtonText>Sair do Meetapp</SubmitButtonText>
        </LogoutButton>
      </Form>
    </Container>
  );
}

function tabBarIcon({ tintColor }) {
  return <Icon name="person" size={20} color={tintColor} />;
}

Profile.navigationOptions = {
  tabBarIcon,
  tabBarLabel: 'Meu perfil',
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
