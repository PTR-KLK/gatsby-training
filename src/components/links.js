import styled from "@emotion/styled"
import { Link } from "gatsby"

export const PageLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #2892d7;

    hr {
      border-bottom: 1px solid #2892d7;
    }

    h3,
    p {
      color: #2892d7;
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
    color: #2892d7;
  }
`
