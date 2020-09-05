import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/theme"

export const Main = styled.main`
  color: ${colors.dark};
`

export const Container = styled.section`
  background: ${colors.light};
  position: relative;
  bottom: 0;
  z-index: 3;
  width: 100%;
`

export const Article = styled.article`
  background: ${colors.light};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: calc(50vh - ${rhythm(2)});
  max-width: 800px;
  padding: ${rhythm(0.5)};

  @media (min-width: 768px) {
    padding: ${rhythm(1)};
  }
`
