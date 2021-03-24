import { createGlobalStyle } from 'styled-components'
import { rem } from '@utils/tools'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font: 400 normal 100%/1.2 ${props => props.theme.fonts.primary};
    margin: 0;
    padding: ${rem(96)} 0 0;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyles