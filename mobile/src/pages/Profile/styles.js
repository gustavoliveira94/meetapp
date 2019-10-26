import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
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

export const LogoutButton = styled(RectButton)`
  border-radius: 4px;
  height: 42px;
  margin: 15px 0 15px;
  background: #d44059;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Bar = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 30px 0 20px;
`;
