import styled from "@emotion/styled"
import { Link } from "gatsby"

export const PageLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #F865B0;

    hr {
      border-bottom: 1px solid #F865B0;
    }

    h3,
    p {
      color: #F865B0;
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
    color: #FF3366;
  }
`
