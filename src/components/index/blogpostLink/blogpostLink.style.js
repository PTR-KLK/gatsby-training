import styled from "@emotion/styled"
import { breakpoints } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"
import Img from "gatsby-image"

export const Container = styled.section`
  padding: ${rhythm(0.5)};

  p {
    text-align: justify;
  }

  p,
  h3 {
    margin: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(1 / 4)};
`

export const Image = styled(Img)`
  margin-bottom: ${rhythm(1 / 4)};
  max-height: calc(${breakpoints.mobile} / 2);

  @media (min-width: ${breakpoints.tablet}) {
    max-height: calc(${breakpoints.tablet} / 3);
  }
`
