import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/theme"

export const Header = styled.header`
  background: rgba(39, 39, 39, 0.6);
  align-self: flex-end;
  width: 100%;
  
  padding: 0 ${rhythm(0.5)};
  
  & > * {
    margin: 0;
    padding: ${rhythm(0.25)} 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 calc((50% + ${rhythm(1)}) - 384px);
  }
`
