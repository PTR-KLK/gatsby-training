import styled from "@emotion/styled"
import Img from "gatsby-image"
import {
  ThreeBarsIcon,
} from "@primer/octicons-react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../../utils/theme"
import { rhythm } from "../../utils/typography"


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding: ${rhythm(0.125)} ${rhythm(0.5)} ${rhythm(0.125)};
  position: sticky;
  top: 0;
  z-index: 5;
  color: ${colors.light};
  background: ${colors.dark};

  @media (min-width: 768px) {
    padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
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

    hr {
      border-bottom: 1px solid ${colors.accent};
    }

    h3,
    p {
      color: ${colors.accent};
    }
  }
`

export const HomeHyperlink = styled(Hyperlink)`
  display: flex;
  align-items: center;

  & h2 {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin: 0;
      text-align: center;
    }
  }
`

export const Picture = styled(Img)`
  width: ${rhythm(1.75)};
  height: ${rhythm(1.75)};
  border-radius: 50%;
  margin: 0;

  @media (min-width: 768px) {
    margin: 0 ${rhythm(0.25)} 0 0;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${colors.light};
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Section = styled.section`
  ${props =>
    props.menuVisible
      ? css`
          display: flex;
          flex-flow: column;
          position: absolute;
          text-align: center;
          width: 100%;
          top: ${rhythm(2)};
          left: 0;
          background: rgb(54, 52, 52, 0.8);
          z-index: 4;
        `
      : css`
          display: none;
        `}

  @media (min-width: 768px) {
    display: block;
  }
`
export const Icon = styled(ThreeBarsIcon)`
  width: ${rhythm(1)};
  height: ${rhythm(1)};

  @media (min-width: 768px) {
    & > * {
      display: none;
    }
  }
`
