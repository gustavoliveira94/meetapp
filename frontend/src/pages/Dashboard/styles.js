import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    h1 {
      color: #fff;
    }

    a {
      padding: 8px 20px;
      border-radius: 4px;
      background: #f94d6a;
      border: 0;
      color: #fff;
      font-weight: bold;
      font-size: 16px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }

  li {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px 30px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }

    > div {
      display: flex;

      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        margin-right: 33px;
      }
    }
  }
`;
