import styled from 'styled-components';

export const TeamDivStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.5rem;

  @media(min-width: 375px) {
    width: 90%;
  }

  @media(min-width: 1440px) {
    width: 100%;
  }
`;
