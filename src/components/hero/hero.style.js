import styled from "@emotion/styled"
import Img from "gatsby-image"
import { colors } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

export const Header = styled.header`
  z-index: 1;
  position: sticky;
  height: 50vh;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  position: absolute;
  color: ${colors.light};
  z-index: 2;
  margin: 0 auto;
  padding: 0;

  & > * {
    margin: 0;
  }
`

export const Picture = styled(Img)`
  width: 100%;
  height: 100%;
`

export const Background = styled.section`
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(-30deg, ${colors.secondary}, ${colors.primary});
`
