import styled from 'styled-components';

export const StyledPokeballDiv = styled.div`
  position: fixed;
  z-index: 1;
  top: -10vw;
  right: -10vh;
  opacity: 0.2;
  transform: rotate(-10deg);

  img {
    width: 400px;
    height: auto;
  }

  @media (min-width: 374px) {
    img {
      width: 400px;
      height: auto;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 759px) {
    img {
      width: 400px;
      height: auto;
    }
  }

  @media (min-width: 760px) and (max-width: 1019px) {
    top: -10vw;
    right: -5vh;

    img {
      width: 500px;
      height: auto;
    }
  }

  @media (min-width: 1020px) and (max-width: 1400px) {
    top: -12vw;
    right: -3vh;

    img {
      width: 600px;
      height: auto;
    }
  }

  @media (min-width: 1401px) and (max-width: 1650px) {
    top: -8vw;
    right: -5vh;

    img {
      width: 800px;
      height: auto;
    }
  }

  @media (min-width: 1651px) and (max-width: 2650px) {
    top: -8vw;
    right: -5vh;

    img {
      width: 900px;
      height: auto;
    }
  }
`;
