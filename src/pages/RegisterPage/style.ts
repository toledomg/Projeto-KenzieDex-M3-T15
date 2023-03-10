import styled from 'styled-components';

export const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray3};

  position: relative;

  .divTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    gap: 10px;
  }

  .redirect {
    color: ${({ theme }) => theme.colors.primary.default};

    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .registerEyePosition {
    position: relative;
    .eye {
      position: absolute;
      top: 15px;
      right: 10px;

      font-size: 20px;
      color: #f8f9fa50;
    }
  }

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left,
    .right {
      width: 100%;
    }

    .formBox {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      form,
      button,
      a {
        width: 100%;
      }

      p {
        max-width: 280px;
      }
    }

    @media (max-width: 750px) {
      flex-direction: column-reverse;
      .ballsImage {
        display: none;
      }
    }
  }
`;
