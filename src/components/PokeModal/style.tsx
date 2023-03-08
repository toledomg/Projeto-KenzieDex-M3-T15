import styled from "styled-components";

export const ModalContainer = styled.div`
  font-family: 'Inter', sans-serif;
  
  position: absolute;
  background-color: rgb(0, 0, 0, 0.75);

  width: 100%;
  height: 100vh;

  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

  export const Modal = styled.div`
  width: 280px; 
  height: 240px;

  background-color: ${({theme}) => theme.colors.gray2};

  border-radius: 8px;

  border-top: 78px solid ${({theme}) => theme.colors.gray3};

  position: relative;
`
export const ModalHeader = styled.div`
  width: 100%;
  height: 78px;

  position: absolute;

  top: -64px;
  left: 14px;
`

export const PokemonName = styled.h1`
  color: ${({theme}) => theme.colors.gray0};
  
  font-size: 20px;

  top: -64px;
  left: 14px;
`
export const PokemonType = styled.h1`
  color: ${({theme}) => theme.colors.gray0};
  
  font-size: 12px;

  font-weight: normal;

  top: -50px;
  left: 14px;
`

export const PokeTypes = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

margin-top: -8px;

`
export const PokemonModalImage = styled.img`
  width: 143px;
  height: 143px;

  position: absolute;

  bottom: 24px;
  right: 18px;
`

export const ModalMain = styled.main`  
  width: 100%;
  height: 168px; 

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  margin-left: 14px;

  gap: 0.8rem;

  > h1 {
    font-size: 16px;

    color: ${({theme}) => theme.colors.gray0};

    margin-top: 0.8rem;
  }

  > section{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

  }
  > section > span {
    color: ${({theme}) => theme.colors.gray0};
    width: 100%;
    font-size: 12px;
  }
`

export const ModalClose = styled.button`
  width: 20px;
  height: 20px;

  background-color: ${({theme}) => theme.colors.gray0};
  color: ${({theme}) => theme.colors.secondary.default};

  border: none;
  border-radius: 4px;
  outline: none;

  position: absolute;
  
  top: 284px;
  left: 20px;

  font-weight: bold;

  cursor: pointer;
`

export const AddButton = styled.button`
  width: 71px;
  height: 18px;

  font-size: 10px;
  font-weight: normal;

  color: ${({theme}) => theme.colors.gray0};

  background-color: ${({theme}) => theme.colors.gray2};

  border-radius: 4px;

  cursor: pointer;
`