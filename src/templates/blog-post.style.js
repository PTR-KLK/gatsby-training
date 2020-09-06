import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

export const Header = styled.header`
  background: rgba(39, 39, 39, 0.6);
  align-self: flex-end;
  width: 100%;
  
  padding: 0 ${rhythm(0.5)};
  
  & > * {
    margin: 0;
    padding: ${rhythm(0.25)} 0;
  }

  @media (min-width: 768px) {
    padding: 0 ${rhythm(1)};
  }

  @media (min-width: 800px) {
    padding: 0 calc((50% + ${rhythm(1)}) - 400px);
  }
`
