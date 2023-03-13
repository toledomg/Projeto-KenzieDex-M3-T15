import styled from 'styled-components';

export const BattleContainer  = styled.div`
  max-width: 800px;
  height: 10vh;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  > div{ 
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  > div > h1 {
    font-size: 94px;

    color: ${({theme}) => theme.colors.primary.default};
  }

  > div > button {
    width: 160px;
    height: 35px;

    background-color: ${({theme}) => theme.colors.secondary.default};

    color: ${({theme}) => theme.colors.gray0};

    font-size: 24px;

    border: none;
    border-radius: 4px;

    outline: none;
  }
`

export const CardContainer = styled.div`
 width: 198px;
 height: 248px;

 border: 3px solid ${({theme}) => theme.colors.secondary.default};
 border-radius: 8px;

 background-color: rgb(0, 0, 0, 0.2);

 color: ${({theme}) => theme.colors.gray0};

 gap: 0.5rem;
`

export const PokemonBattleCard = styled.div`
  width: 127px;
  height: 188px;

  background-color: ${({theme}) => theme.colors.gray4};

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  position: relative;

  > img {
    position: absolute;

    width: 154px;
    height: auto;

    top: -22px;
  
  }

  > span {
    margin-bottom: -120px;

    font-weight: bold;
  }
`