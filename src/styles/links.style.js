import styled from "@emotion/styled"
import { Link } from "gatsby"
import { colors } from "../utils/theme"

export const PageLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    hr {
      border-bottom: 1px solid ${colors.accent};
    }

    h3,
    p {
      color: ${colors.accent};
    }
  }
`

export const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }
`
