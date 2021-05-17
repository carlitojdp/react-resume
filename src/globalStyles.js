import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-bold: 'Playfair Display', serif;
    --font-family-normal: 'Montserrat', sans-serif;
    --font-weight-bold: 400;
    --font-weight-normal: 300;
    --color-header: #22223b;
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f5f5f5;
    --color-skills-accent: #e63946;
    --color-contact-accent: #ff8500;
    --color-primary: #525b76;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    display: inline-block;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html {
    font: 400 62.5%/1.4 var(--font-family-normal);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-bold);
    font-weight: var(--font-weight-bold);
  }
`;

export default GlobalStyles;
