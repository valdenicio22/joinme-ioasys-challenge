import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px - 1rem
    }
    body {
      font-size: ${theme.font.sizes.medium};
      -webkit-font-smoothing: anatialiased;
    }
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.regular};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.weight.bold};
    }

    .react-modal-overlay {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-color: #f0f2f5;
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }
    .btn-modal-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter 1s;
      &:hover {
        filter: brightness(0.7);
      }
    }
  `}

  
`
export default GlobalStyles
