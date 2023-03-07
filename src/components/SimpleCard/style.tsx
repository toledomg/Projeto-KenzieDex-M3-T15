import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: 'Inter', sans-serif;
  
  width: 280px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 3rem;

  position: relative;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 4px solid ${({theme}) => theme.colors.secondary.default};
  border-right: 4px solid ${({theme}) => theme.colors.primary.default};

  padding: 1rem;

  gap: 0.5rem;

  background-color: ${({theme}) => theme.colors.gray4};

  box-shadow: 8px 8px rgb(0, 0, 0, 0.2);  

  > section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; 
  }
`

export const PokemonImage = styled.img`
  width: 143px;
  height: 143px;

  position: absolute;

  bottom: 12px;
  right: -2px;
`

export const PokemonName = styled.span`
  font-size: 20px;
  font-weight: bold;
  
  color: ${({theme}) => theme.colors.gray0}
`

export const PokemonId = styled.span`
  font-size: 10px;
  font-weight: normal;

  color: ${({theme}) => theme.colors.gray0};
`

export const InfoButton = styled.button`
  width: 36px;
  height: 17px;

  font-size: 10px;

  color: ${({theme}) => theme.colors.gray0};
  background-color: ${({theme}) => theme.colors.gray2};

  border-radius: 4px;  

  outline: none;
  border: none;

  cursor: pointer;
`