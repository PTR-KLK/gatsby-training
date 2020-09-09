import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"
import { colors, breakpoints, pageWidth } from "../../utils/theme"

export const Container = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  max-width: ${pageWidth};
  padding: ${rhythm(0.5)};
  color: ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    padding: ${rhythm(1)};
    justify-content: space-between;
    flex-flow: row;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: flex-end;
  }
`
export const Hyperlink = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }
`
