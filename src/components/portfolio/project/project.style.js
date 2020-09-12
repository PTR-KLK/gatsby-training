import styled from "@emotion/styled"
import { rhythm } from "../../../utils/typography"
import { colors, breakpoints } from "../../../utils/theme"
import {
  MarkGithubIcon,
  TagIcon,
  ClockIcon,
  GlobeIcon,
} from "@primer/octicons-react"

export const Li = styled.li`
  margin: 0;

  & section {
    width: 100%;
    padding: ${rhythm(1 / 2)};

    & h3 {
      text-transform: capitalize;
    }

    & ul {
      list-style: none;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      & li {
        margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 4)} 0;
        padding: ${rhythm(1 / 16)} ${rhythm(1 / 8)};
        border-radius: ${rhythm(1 / 4)};
        background: ${colors.primary};
        color: ${colors.light};

        & p {
          align-self: center;
        }

        &:hover,
        &:hover a {
          background: ${colors.accent};
          color: ${colors.dark};
        }
      }
    }

    & h3,
    > p:first-of-type {
      margin-bottom: ${rhythm(1 / 4)};
    }

    & > * {
      margin-bottom: 0;
    }

    @media (min-width: ${breakpoints.tablet}) {
      padding: ${rhythm(1)};
    }
  }
`

export const Hyperlink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 0 ${rhythm(1 / 4)} 0;
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }

  & p {
    margin: 0 0 0 ${rhythm(1 / 4)};
    align-self: center;

    @media (min-width: ${breakpoints.tablet}) {
      margin: 0 ${rhythm(1 / 2)} 0 ${rhythm(1 / 4)};
    }
  }

  & span {
    display: flex;
    margin: 0 0 ${rhythm(1 / 4)} 0;

    @media (min-width: ${breakpoints.tablet}) {
      margin: 0;
    }
  }
`

export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  align-self: center;
  height: 24px;
  position: relative;
  margin: 0;
  top: 1px;
  width: 24px;
  background-color: ${props => props.color};
`

export const UpdatedIcon = styled(ClockIcon)`
  margin: 0;
  align-self: center;
`

export const TopicIcon = styled(TagIcon)`
  margin: 0;
  align-self: center;
`

export const RepoIcon = styled(MarkGithubIcon)`
  margin: 0;
  align-self: center;
`

export const DemoIcon = styled(GlobeIcon)`
  margin: 0;
  align-self: center;
`
