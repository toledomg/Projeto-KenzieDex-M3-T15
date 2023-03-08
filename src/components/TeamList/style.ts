import styled from 'styled-components';

export const StyledTeamUl = styled.ul`
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  overflow-y: auto;
  

  @media(min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-content: flex-start;
  }
`;





