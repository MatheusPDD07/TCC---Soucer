import { createGlobalStyle, css } from 'styled-components'
import { darken } from 'polished'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Regular'), url('/fonts/poppins-v19-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), url('/fonts/poppins-v19-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Poppins Bold'), url('/fonts/poppins-v19-latin-900.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      background-color: ${theme.colors.background};

      a {
        color: ${theme.colors.secondary};
        text-decoration: none;

        &:hover {
          color: ${darken(0.1, theme.colors.secondary)};
        }
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.lightGray};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${darken(0.1, theme.colors.secondary)};
    }

    ::-webkit-input-placeholder {
      /* Edge */
      color: ${theme.colors.placeholders};
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${theme.colors.placeholders};
    }

    ::placeholder {
      color: ${theme.colors.placeholders};
    }
  `}
`

export default GlobalStyles
