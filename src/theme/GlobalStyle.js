import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    /* font-size: 62.5%;  */
  }
  
  body {
    margin: 0;
    padding: 0;
    /* font-size: 1.6rem; */
    font-size: 1rem;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }

  p {
    margin: 0;
    line-height: 1.8;
    padding-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    margin: 0 0 1rem;
  }
`;

export default GlobalStyle;
