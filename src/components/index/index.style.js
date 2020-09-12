import styled from "@emotion/styled"
import { colors } from "../../utils/theme"
import { Link } from "gatsby"

export const Hyperlink = styled(Link)`
  color: inherit;
  text-decoration: none;

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
