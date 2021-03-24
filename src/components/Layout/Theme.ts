import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    background: "#f2f6fd",
    offblack: "#383b39",
    white: "#FFFFFF",
    blue: "#2f5c79",
    gray: "#f2f6fd",
    darkgray: "#DDDDDD",
    green: "#00B19E",
    lightgreen: "#3FC08C"
  },
  transition: "all 150ms ease-in-out",
  media: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
  fonts: {
    primary: "'Libre Franklin', sans-serif",
    secondary: "'Fjalla One', sans-serif"
  }
}