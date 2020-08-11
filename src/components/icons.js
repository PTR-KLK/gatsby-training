import styled from "@emotion/styled"
import {
  MarkGithubIcon,
  ThreeBarsIcon,
  ClockIcon,
} from "@primer/octicons-react"
import { rhythm } from "../utils/typography"

export const UpdatedIcon = styled(ClockIcon)`
  width: 12px;
  height: 12px;
  margin: auto 0;
`

export const ExternalLinkIcon = styled(MarkGithubIcon)`
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
