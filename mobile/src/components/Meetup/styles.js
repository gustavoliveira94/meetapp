import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 345px;
  border-radius: 4px;
  margin-bottom: 20px;
  background: #fff;
`;

export const Image = styled.Image`
  height: 150px;
`;

export const InfoContainer = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const LocationContainer = styled.View`
  margin: 10px 0 15px;
`;

export const LocationText = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Subscribe = styled(RectButton)`
  height: 40px;
  border-radius: 4px;
  background: #d44059;
  padding: 10px 0;
`;

export const SubscribeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
