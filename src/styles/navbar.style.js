import styled from "@emotion/styled"
import Img from "gatsby-image"
import { PageLink } from "../styles/links.style"
import { css, keyframes } from "@emotion/core"
import { colors } from "../utils/theme"
import { rhythm } from "../utils/typography"

const changeColor = keyframes`
0%   {
  background: none;
}
100% {
  background: ${colors.dark};
}
`

export const StyledNav = styled.nav`
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
    position: fixed;
    padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
    ${props =>
      !props.figureVisible
        ? css`
            animation: ${changeColor} 250ms ease-out;
            background: ${colors.dark};
          `
        : css`
            background: rgba(0, 0, 0, 0.6);
          `}
  }
`

export const StyledPageLink = styled(PageLink)`
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

export const StyledImg = styled(Img)`
  width: ${rhythm(1.75)};
  height: ${rhythm(1.75)};
  border-radius: 50%;
  margin: 0;

  @media (min-width: 768px) {
    margin: 0 ${rhythm(0.25)} 0 0;
  }
`

export const StyledButton = styled.button`
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

export const StyledSection = styled.section`
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
