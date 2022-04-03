import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px - 1rem
    }
    body {
      font-family: ${theme.font.family};
    }
  `}

  
`

export default GlobalStyles
