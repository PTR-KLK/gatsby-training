import styled from "@emotion/styled"
import Img from "gatsby-image"
import { keyframes } from "@emotion/core"
import { colors } from "../utils/theme"
import { rhythm } from "../utils/typography"
import { InView } from "react-intersection-observer"
import { OctofaceIcon } from "@primer/octicons-react"

const moveBackground = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledInView = styled(InView)`
  margin: 0;
  display: flex;
  align-items: center;
`

export const StyledFigcaption = styled.figcaption`
  width: 100%;
  position: absolute;
  background: none;
  color: ${colors.light};
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  padding: ${rhythm(1 / 2)} 0;
`

export const StyledSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${rhythm(0.75)};

  & > * {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 0 ${rhythm(2)};
  }
`

export const StyledImg = styled(Img)`
  width: 100%;
  height: 50vh;
  z-index: 1;
`

export const StyledBackground = styled.span`
  width: 100%;
  height: 50vh;
  z-index: 1;
  background: linear-gradient(-30deg, ${colors.secondary}, ${colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledIcon = styled(OctofaceIcon)`
  height: 80%;
  width: auto;
  animation: ${moveBackground} 15s linear infinite;
`
