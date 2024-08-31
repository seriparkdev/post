import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 45 920;
    font-display: swap;
    src: url('../src/assets/PretendardVariable.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: center;
  }

  #root {
    min-width: 320px;
    max-width: 480px;
    width: 100%;
    height: 100%;
  }

  textarea {
    resize: none;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding-left: 0px;
  }
`;
