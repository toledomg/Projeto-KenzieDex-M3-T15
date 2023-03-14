import styled from 'styled-components';

export const TeamDivStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 1.5rem;

  @media (min-width: 375px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }

  > div {
    width: 94%;
    min-width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: ${({ theme }) => theme.colors.primary.default};
    }
    h2 {
      margin-bottom: 0px;
    }
  }
`;
