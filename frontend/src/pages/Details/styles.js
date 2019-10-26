import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  img {
    display: flex;
    flex-shrink: 1;
    max-width: 940;
    height: 300px;
    margin: 50px 0 25px;
  }

  > p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }

  > div {
    display: flex;
    align-items: center;

    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);

      display: flex;
      align-items: center;

      & + p {
        margin-left: 30px;
      }

      svg {
        opacity: 0.6;
        margin-right: 10px;
      }
    }
  }
`;

export const EditButton = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 11px 20px;
  border-radius: 4px;
  background: #4dbaf9;
  border: 0;
  margin-right: 15px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const CancelButton = styled.button.attrs({
  type: 'button',
})`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 11px 20px;
  border-radius: 4px;
  background: #d44059;
  border: 0;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
