import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

export const Header = styled.header`
  max-width: 800px;
  padding: 0 ${rhythm(0.5)};
  & > * {
    margin: 0;
    padding: ${rhythm(0.25)} 0;
  }

  @media (min-width: 768px) {
    padding: 0 ${rhythm(1)};
  }
`
