import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  height: 50px;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
`;

export const SubmitButton = styled(RectButton)`
  border-radius: 4px;
  height: 50px;
  margin-top: 5px;
  background: #f94d6a;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 42px;
  height: 42px;
  margin-bottom: 50px;
`;

export const LinkText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`;
