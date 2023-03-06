import styled from 'styled-components';

export const StyledPokeballDiv = styled.div`
  position: fixed;

  top: -20vw;
  right: -10vh;
  opacity: 0.2;
  transform: rotate(-10deg);

  img {
    width: 350px;
    height: auto;
  }

  @media (min-width: 374px) {
    img {
      width: 350px;
      height: auto;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 759px) {
    img {
      width: 375px;
      height: auto;
    }
  }

  @media (min-width: 760px) and (max-width: 1019px) {
    top: -15vw;
    right: -5vh;

    img {
      width: 425px;
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
