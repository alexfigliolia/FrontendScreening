import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      white: string,
      offblack: string,
      blue: string,
      gray: string,
      darkgray: string,
      green: string,
      lightgreen: string
    },
    transition: string,
    media: {
      sm: string,
      md: string,
      lg: string,
      xl: string
    }
    fonts: {
      primary: string,
      secondary: string
    }
  }
}