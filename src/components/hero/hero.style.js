import styled from "@emotion/styled"
import Img from "gatsby-image"
import { colors } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import { InView } from "react-intersection-observer"

export const Header = styled(InView)`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  position: absolute;
  color: ${colors.light};
  z-index: 2;
  margin: 0 auto;
  padding: ${rhythm(1 / 2)} ${rhythm(0.75)};

  h1, h2, h3, p {
    background: rgba(0,0,0,0.6);
    padding: 0 ${rhythm(1 / 4)};
    margin: ${rhythm(1 / 8)} 0;
  }

  & > * {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: ${rhythm(1 / 2)} ${rhythm(2)};
  }
`

export const Picture = styled(Img)`
  width: 100%;
  height: 50vh;
`

export const Background = styled.section`
  z-index: 1;
  width: 100%;
  height: 50vh;
  background: linear-gradient(-30deg, ${colors.secondary}, ${colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
`
