import styled from 'styled-components';

export const PokemonContainer = styled.div`
  max-width: 1020px;
  min-width: 320px;
  max-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray2};
    border-radius: 0.5rem;
    border: 0.25rem solid ${({ theme }) => theme.colors.gray3};
  }
  z-index: 9999;
  margin-top: 1rem;
`;
