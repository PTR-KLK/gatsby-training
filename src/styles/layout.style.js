import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

export const StyledMain = styled.main`
  background: ${colors.light};
  color: ${colors.dark};
`

export const StyledArticle = styled.article`
  z-index: 3;
  min-height: 50vh;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: ${rhythm(0.5)};

  @media (min-width: 768px) {
    padding: ${rhythm(1)};
  }
`
