import styled from 'styled-components';

export const GlobalContainer = styled.main`
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

  padding: 1rem 1rem 0 1rem;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 10px;
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
