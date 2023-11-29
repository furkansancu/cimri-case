import { createGlobalStyle } from 'styled-components'
import { backgroundSlightBlue, textGray } from './sharedStyles'

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
`

export default globalStyle