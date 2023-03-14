import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray3};

<<<<<<< HEAD
=======
  position: relative;

  .loginEyePosition {
    position: relative;
    .eye {
      position: absolute;
      top: 15px;
      right: 10px;

      font-size: 20px;
      color: #f8f9fa50;
    }
  }

>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
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
