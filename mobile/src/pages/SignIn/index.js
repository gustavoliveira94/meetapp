import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import Background from '../../components/Background';
import {
  Container,
  Form,
  TextInput,
  SubmitButton,
  Image,
  SubmitButtonText,
  LinkText,
} from './styles';

import logo from '../../assets/logo.png';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const payload = { email, password };

    dispatch(signInRequest(payload));
  };

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <TextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Digite sua senha"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <SubmitButtonText>Entrar</SubmitButtonText>
            )}
          </SubmitButton>
        </Form>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar conta grátis</LinkText>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
