import styled from "@emotion/styled"
import { rhythm } from "../../../utils/typography"
import { colors, breakpoints } from "../../../utils/theme"

export const Hyperlink = styled.a`
  color: inherit;
  text-decoration: none;
  align-self: center;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }
`

export const BioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`

export const Picture = styled.img`
  width: ${rhythm(5)};
  height: ${rhythm(5)};
  border-radius: 50%;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 ${rhythm(1)} 0 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: ${rhythm(7.5)};
    height: ${rhythm(7.5)};
    margin: ${rhythm(1)};
  }

  @media (min-width: ${breakpoints.bigScreen}) {
    width: ${rhythm(15)};
    height: ${rhythm(15)};
    margin: ${rhythm(2)};
  }
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin: 0;
  }
`
