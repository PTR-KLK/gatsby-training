import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { colors } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"

export const Nav = styled.nav`
  position: fixed;
  z-index: 4;
  top: 50vh;
  right: 0;
  color: ${colors.light};
  background: none;
  transform: translateX(50%) translateX(-${rhythm(0.5)}) rotate(-90deg);
  display: flex;
`

export const Hyperlink = styled(AnchorLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: ${rhythm(0.75)};
  padding: ${rhythm(0.125)} ${rhythm(0.25)};
  margin: 0;
  
  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    h3,
    p {
      color: ${colors.accent};
    }
  }
`
