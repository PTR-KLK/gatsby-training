import styled from "@emotion/styled"
import { colors, breakpoints } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

export const Heading = styled.h1`
  padding: ${rhythm(0.25)} ${rhythm(0.5)} 0;
  margin: 0;
  align-self: center;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)} ${rhythm(1)} 0;
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

export const Hr = styled.hr`
  margin: 0 ${rhythm(0.5)};
  border-bottom: 1px solid ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`

export const Hyperlink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    h3,
    p {
      color: ${colors.accent};
    }
  }
`
