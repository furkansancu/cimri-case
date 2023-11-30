import { createGlobalStyle } from 'styled-components'
import { backgroundSlightBlue, textGray, mobileSize, desktopSize, tabletSize } from './sharedStyles'

const globalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${backgroundSlightBlue};
    color: ${textGray};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
    font-family: var(--font-inter);
  }

  .hideMobile {
    @media (max-width: ${mobileSize}px) {
      display: none;
    }
  }

  .hideTablet {
    @media (min-width: ${mobileSize + 1}px) and (max-width: ${tabletSize}px) {
      display: none;
    }
  }

  .hideDesktop {
    @media (min-width: ${tabletSize + 1}px) {
      display: none;
    }
  }
`

export default globalStyle