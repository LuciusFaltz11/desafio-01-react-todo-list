import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 1.5px ${(props) => props.theme['purple-dark']}
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
  }

`;
