import styled from "@emotion/styled"
import { rhythm } from "./typography"

export const colors = {
  light: "#F1E9DA",
  dark: "#272727",
  darkTransparent: "rgba(39, 39, 39, 0.7)",
  primary: "#2B59C3",
  secondary: "#BD4089",
  accent: "#2CA58D",
}

export const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1440px",
  bigScreen: "2560px",
}

export const pageWidth = breakpoints.tablet

export const Hr = styled.hr`
  margin: 0 ${rhythm(0.5)};
  border-bottom: 1px solid ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`
