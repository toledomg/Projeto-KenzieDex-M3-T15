import styled from 'styled-components';

export const StyledCardCard = styled.li`
  font-family: 'Inter', sans-serif;

  width: 300px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  position: relative;

  margin-top: 30px;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary.default};
  border-right: 4px solid ${({ theme }) => theme.colors.primary.default};

  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.gray4};

  box-shadow: 8px 8px rgb(0, 0, 0, 0.2);
`;

export const StyledDivCard = styled.div`
  padding: 1rem;
`;

export const StyledSectionCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const StyledPokemonName = styled.h1`
  color: ${({ theme }) => theme.colors.gray0};

  font-size: 20px;

  top: -64px;
  left: 14px;
`;

export const StyledPokemonId = styled.span`
  font-size: 13px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.gray0};
`;

export const StyledRemovePokemon = styled.button`
  width: 100px;
  height: 27px;

  font-size: 11px;

  color: ${({ theme }) => theme.colors.gray0};
  background-color: ${({ theme }) => theme.colors.gray2};

  border-radius: 4px;

  margin-top: 0.5rem;

  outline: none;
  border: none;

  cursor: pointer;
`;

export const StyledPokemonImageCard = styled.img`
  width: 143px;
  height: 143px;

  position: absolute;

  bottom: 5px;
  right: 20px;

  @media (min-width: 1020px) {
    /* bottom: 190px; */
    transition: 1s ease;
  }
`;

export const StyledPokemonInformation = styled.div`
  width: 100%;
  height: 168px;

  display: none;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  padding: 10px 15px;

  margin: 0 auto;

  gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray2};

  > h1 {
    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray0};

    margin-top: 0.2rem;
  }

  @media (min-width: 1020px) {
    display: flex;
  }
`;

export const StyledInformation = styled.section`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > span {
    color: ${({ theme }) => theme.colors.gray0};
    width: 100%;
    font-size: 12px;
  }
`;
