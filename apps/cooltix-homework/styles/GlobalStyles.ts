import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  html {
    -webkit-text-size-adjust: 100%;
    color: #222d39;
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    tab-size: 4;
    scroll-behavior: smooth;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
  }

  h1,
  h2,
  p {
    margin: 0;
  }

  h1,
  h2 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export default GlobalStyles;
