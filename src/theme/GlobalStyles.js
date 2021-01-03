import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';
import './fonts.css';

export const sharedWrapper = css`
  max-width: 111rem;
  width: 90%;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
  }
`;

export default GlobalStyle;
