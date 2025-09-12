import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Roboto Mono',  sans-serif;
    font-size: 1.6rem; /* 16px */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: 'Roboto Mono',  sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  a, btn, input, textarea {
    font-family: 'Roboto Mono', 'Arial', sans-serif;
  }
  h1, h2, h3, h4, h5{
    font-weight: 400;
  }
`;

export default GlobalStyle;
