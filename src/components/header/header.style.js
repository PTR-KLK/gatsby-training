import styled from "@emotion/styled"
import { breakpoints } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

export const Heading = styled.h1`
  padding: ${rhythm(0.25)} ${rhythm(0.5)} ${rhythm(0.5)};
  margin: 0;
  align-self: center;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export const Subheading = styled.h2`
  padding: ${rhythm(0.5)} ${rhythm(0.5)} 0;
  margin: 0;
  align-self: center;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`