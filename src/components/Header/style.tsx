import styled from 'styled-components';

export const GlobalContainer = styled.main`
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

export const HeaderContainer = styled.header`
  max-width: 1000px;
  min-width: 320px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  padding: 1rem 1rem 0rem 1rem;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    height: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  nav > a {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.gray1};
    cursor: pointer;
  }

  .cursor {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export const YellowLine = styled.img`
  width: 100%;
  height: 1px;
`;
