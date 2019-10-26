import React, { useState } from 'react';
import { useCallback } from 'react-redux';
import PropTypes from 'prop-types';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import api from '../../services/api';

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

export default function SignUp({ navigation }) {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    try {
      await api.post('/users', { fullname, username, email, password });

      Alert.alert('Conta criada com sucesso!');

      setLoading(false);

      navigation.navigate('SignIn');
    } catch (e) {
      setLoading(false);

      Alert.alert(
        'Ocorreu um erro enquanto a conta era criada. Tente novamente.'
      );
    }
  }, [email, fullname, navigation, password, username]);

  return (
    <Background>
      <Container>
        <Image source={logo} />
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
              <SubmitButtonText>Criar conta</SubmitButtonText>
            )}
          </SubmitButton>
        </Form>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <LinkText>Já tenho login</LinkText>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
