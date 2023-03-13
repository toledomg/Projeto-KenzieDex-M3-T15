import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  width: 280px;
  height: 25px;

  background-color: ${({ theme }) => theme.colors.gray2};

  border: 1px solid ${({ theme }) => theme.colors.secondary.default};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.gray0};

  margin: 0 auto;

  margin-top: 40px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;

  padding: 0 5px;

  > input {
    background-color: transparent;

    border: none;
    outline: none;

    color: ${({ theme }) => theme.colors.gray0};

    width: 100%;
  }

  @media (min-width: 768px) {
    width: 436px;
    height: 39px;
  }
`;
