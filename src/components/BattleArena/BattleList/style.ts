import styled from 'styled-components';

export const StyledTeamUl = styled.ul`
  width: 100%;
  max-width: 1200px;
  min-width: 320px;
  height: 50vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 30px;
  gap: 25px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.25rem;
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

  .empty {
    width: 100%;
    min-width: 320px;
    height: 50vh;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 2rem;
    }
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-content: flex-start;
  }
`;
