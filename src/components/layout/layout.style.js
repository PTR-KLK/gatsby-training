import styled from "@emotion/styled"
import { colors, pageWidth } from "../../utils/theme"

export const Main = styled.main`
  z-index: 3;
  position: relative;
  color: ${colors.dark};
  background: ${colors.light};
  width: 100%;
`

export const Article = styled.article`
  width: 100%;
  max-width: ${pageWidth};
  margin: 0 auto;
`
