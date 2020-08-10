import styled from "@emotion/styled"
import { LinkExternalIcon, ThreeBarsIcon } from "@primer/octicons-react"
import { rhythm } from "../utils/typography"

export const ExternalLinkIcon = styled(LinkExternalIcon)`
  margin: ${rhythm(1 / 4)};
`

export const MenuIcon = styled(ThreeBarsIcon)`
  width: ${rhythm(1)};
  height: ${rhythm(1)};

  @media (min-width: 768px) {
    & > * {
      display: none;
    }
  }
`
