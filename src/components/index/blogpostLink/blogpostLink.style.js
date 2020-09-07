import styled from "@emotion/styled"
import { colors, breakpoints } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const HeaderHr = styled.hr`
  border-bottom: 1px solid ${props => props.color};
  margin: 0;
`

export const Hyperlink = styled(Link)`
  padding: 0;
  color: inherit;
  text-decoration: none;

  & h3,
  p {
    margin: 0;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    hr {
      border-bottom: 1px solid ${colors.accent};
    }

    h3,
    p {
      color: ${colors.accent};
    }
  }
`

export const BackgroundImageSection = styled(BackgroundImage)`
  padding: ${rhythm(1 / 2)};
  color: ${colors.light};

  &:after,
  &:before {
    filter: brightness(40%);
  }

  &:hover {
    &:after,
    &:before {
      filter: grayscale(100%) contrast(300%) brightness(20%);
    }
  }

  @media (min-width: ${breakpoints.tablet}px) {
    padding: ${rhythm(1)};
  }
`

export const Section = styled.section`
  padding: 0 ${rhythm(1 / 2)};

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 0 ${rhythm(1)};
  }
`

export const Hr = styled.hr`
  border-bottom: 1px solid ${colors.dark};
  margin: ${rhythm(1 / 2)} 0;

  @media (min-width: ${breakpoints.tablet}px) {
    margin: ${rhythm(1)} 0;
  }
`
