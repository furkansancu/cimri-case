import { createGlobalStyle } from 'styled-components'
import { backgroundSlightBlue, textGray, maxMobileSize, minDesktopSize } from './sharedStyles'

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
    @media (max-width: ${maxMobileSize}) {
      display: none;
    }
  }

  .hideDesktop {
    @media (min-width: ${minDesktopSize}) {
      display: none;
    }
  }
`

export default globalStyle