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

    textarea {
      height: 200px;
      padding: 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      transition: 0.2s border;

      resize: none;

      &:focus {
        border: 1px solid #fff;
      }
    }

    .react-datepicker-wrapper {
      display: flex;
      justify-content: flex-start;

      .react-datepicker__input-container {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }

    > div {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      button {
        padding: 8px 18px;
        border-radius: 4px;
        background: #f94d6a;
        border: 0;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        transition: 0.2s background;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }

        svg {
          margin-right: 10px;
        }
      }

      button[disabled] {
        opacity: 0.6;
      }
    }
  }
`;
