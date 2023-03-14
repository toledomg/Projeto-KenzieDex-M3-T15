import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }


  body {
    background: ${({ theme }) => theme.colors.gray3};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
  
  
`;
