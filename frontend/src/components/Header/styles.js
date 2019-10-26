import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 100%;
  max-width: 940px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a img {
    height: 32px;
    width: 32px;
  }

  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      text-align: right;

      p {
        color: #fff;
        font-weight: bold;
      }

      a {
        color: #999;
        margin-top: 5px;

        &:hover {
          color: #fff;
        }
      }
    }

    button {
      margin-left: 30px;
      padding: 10px 25px;
      border-radius: 4px;
      border: 0;
      background: #d44059;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }
    }
  }
`;
