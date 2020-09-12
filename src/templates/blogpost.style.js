import styled from "@emotion/styled"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import { colors, breakpoints } from "../utils/theme"

export const Image = styled(Img)`
  max-height: calc(${breakpoints.mobile} / 2);
  margin: ${rhythm(0.5)} ${rhythm(0.5)} 0;

  @media (min-width: ${breakpoints.tablet}) {
    max-height: calc(${breakpoints.tablet} / 3);
    margin: ${rhythm(1)} ${rhythm(1)} 0;
  }
`

export const Header = styled.header`
  padding: ${rhythm(0.5)};

  & > *:not(:last-child) {
    margin-bottom: ${rhythm(0.25)};
  }

  & > *:last-child {
    margin-bottom: 0;
    text-align: justify;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
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
