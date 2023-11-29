import { createGlobalStyle } from 'styled-components'
import { backgroundSlightBlue, textGray, maxMobileSize } from './sharedStyles'

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
    @media screen and (max-width: ${maxMobileSize}px) {
      display: none;
    }
  }

  .hideDesktop {
    @media screen and (min-width: ${maxMobileSize + 1}px) {
      display: none;
    }
  }
`

export default globalStyle