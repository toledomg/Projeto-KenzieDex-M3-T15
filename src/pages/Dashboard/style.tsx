import styled from "styled-components";

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;


 overflow-y: scroll;

 height: 736px;

 margin-top: 1rem;

 @media(min-width: 768px){
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  
  width: 1000px;
  height: 950px;

  margin: 0 auto;
  margin-top: 4rem;
 }
`