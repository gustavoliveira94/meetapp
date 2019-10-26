import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    height: 42px;
    width: 42px;
  }

  form {
    margin: 50px 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 50px;
      padding: 15px 20px;
      margin: 5px 0px;
      border: 0;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      transition: 0.2s border;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }

    span {
      margin: 5px 0;
      color: #fff;
    }

    button {
      width: 100%;
      height: 50px;
      margin-top: 10px;
      border-radius: 4px;
      background: #f94d6a;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      border: 0;
      transition: 0.3s background;

      &:hover {
        background: ${darken(0.01, '#f94d6a')};
      }
    }

    button[disabled] {
      opacity: 0.6;
    }
  }

  a {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: #fff;
    }
  }
`;
