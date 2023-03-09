import styled from 'styled-components';

export const StyledTeamUl = styled.ul`
  width: 100%;
  height: 90vh;
  max-width: 1200px;
  min-width: 320px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    margin-top: 3.25rem;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray2};
    border-radius: 0.5rem;
    border: 0.25rem solid ${({ theme }) => theme.colors.gray3};
  }
  

  @media(min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-content: flex-start;
  }
`;





