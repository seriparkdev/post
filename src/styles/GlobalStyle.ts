import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 45 920;
    font-display: swap;
    src: url('../src/assets/PretendardVariable.woff2') format('woff2');
  }

  * {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  textarea {
    resize: none;
  }
`;
