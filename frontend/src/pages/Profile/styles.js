import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      padding: 15px 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      transition: 0.2s border;

      &:focus {
        border: 1px solid #fff;
      }
    }

    span {
      margin: 5px 0;
      color: #fff;
    }

    hr {
      margin: 20px 0;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }

    button {
      width: 162px;
      margin-top: 10px;
      padding: 8px 18px;
      border-radius: 4px;
      background: #f94d6a;
      border: 0;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: 0.2s background;

      align-self: flex-end;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
