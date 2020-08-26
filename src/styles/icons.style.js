import styled from "@emotion/styled"
import {
  MarkGithubIcon,
  ThreeBarsIcon,
  TagIcon,
  ClockIcon,
  GlobeIcon,
} from "@primer/octicons-react"
import { rhythm } from "../utils/typography"

export const UpdatedIcon = styled(ClockIcon)`
  margin: 0;
  align-self: center;
`

export const TopicIcon = styled(TagIcon)`
  margin: 0;
  align-self: center;
`

export const ExternalLinkIcon = styled(MarkGithubIcon)`
  margin: 0;
  align-self: center;
`

export const ExternalSiteIcon = styled(GlobeIcon)`
  margin: 0;
  align-self: center;
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
