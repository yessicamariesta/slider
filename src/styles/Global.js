import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: hsl(210, 36%, 96%);
   }
`
