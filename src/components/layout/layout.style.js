import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"
import { colors, breakpoints, pageWidth } from "../../utils/theme"

export const Main = styled.main`
  z-index: 3;
  position: relative;
  color: ${colors.dark};
  background: ${colors.light};
  width: 100%;
`

export const Article = styled.article`
  width: 100%;
  max-width: ${pageWidth};
  margin: 0 auto;
`

export const Hr = styled.hr`
  margin: 0 ${rhythm(0.5)};
  border-bottom: 1px solid ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: ${pageWidth};
    margin: 0 auto;
  }
`
