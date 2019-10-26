import styled from 'styled-components';

export const Container = styled.section`
  max-width: 940px;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    width: 100%;
    height: 100%;

    &:hover {
      opacity: 0.7;
    }

    article {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 20px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.3);
      }
    }

    img {
      max-width: 940px;
      height: 100%;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
