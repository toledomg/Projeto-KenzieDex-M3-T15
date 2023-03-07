import styled from 'styled-components';

export const GlobalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray3};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: auto;
  padding: 1rem 1rem 0 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
  }

  .cursor {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 161px;
`;

export const YellowLine = styled.img`
  width: 100%;
`;
