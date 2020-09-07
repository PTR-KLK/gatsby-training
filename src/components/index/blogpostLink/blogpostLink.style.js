import styled from "@emotion/styled"
import { colors, breakpoints } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(1 / 4)};
`

export const Hyperlink = styled(Link)`
  padding: ${rhythm(1 / 4)};
  color: inherit;
  text-decoration: none;

  p {
    text-align: justify;
  }

  p,
  h3 {
    margin: 0;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    h3,
    p {
      color: ${colors.accent};
    }

    div {
      border: 1px solid ${colors.accent};
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1 / 2)};
  }
`

export const Image = styled(Img)`
  border: 1px solid ${colors.dark};
  margin-bottom: ${rhythm(1 / 4)};
  max-height: calc(${breakpoints.mobile} / 2);

  @media (min-width: ${breakpoints.tablet}) {
    max-height: calc(${breakpoints.tablet} / 3);
  }
`
