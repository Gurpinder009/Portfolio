import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  
  html,body{
      height:100%;
  }
  
  #root{
      height:100%;
      display:grid;
      position:relative;
      gap:0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  *{
      box-sizing:border-box;
      margin: 0;
        padding:0;

  }
`;
