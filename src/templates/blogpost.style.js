import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { colors, breakpoints } from "../utils/theme"

export const Header = styled.header`
  background: ${colors.darkTransparent};
  align-self: flex-end;
  width: 100%;

  padding: 0 ${rhythm(0.5)};

  & > * {
    margin: 0;
    padding: ${rhythm(0.25)} 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 calc((50% + ${rhythm(1)}) - 384px);
  }
`

export const Section = styled.section`
  padding: ${rhythm(0.5)};
  color: ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    padding: ${rhythm(1)};
    justify-content: space-between;
    flex-flow: row;
  }
`
