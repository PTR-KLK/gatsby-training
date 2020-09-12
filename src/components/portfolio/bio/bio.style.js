import styled from "@emotion/styled"
import { rhythm } from "../../../utils/typography"
import { colors, breakpoints } from "../../../utils/theme"

export const Heading = styled.h1`
  padding: ${rhythm(0.25)} ${rhythm(0.5)} ${rhythm(0.5)};
  margin: 0;
  align-self: center;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export const Subheading = styled.h2`
  padding: ${rhythm(0.5)} ${rhythm(0.5)} 0;
  margin: 0;
  align-self: center;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

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
  padding: ${rhythm(0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export const Picture = styled.img`
  width: ${rhythm(5)};
  height: ${rhythm(5)};
  border-radius: 50%;
  margin: 0 0 ${rhythm(0.5)};

  @media (min-width: ${breakpoints.mobile}) {
    margin: 0 ${rhythm(0.5)} 0 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 ${rhythm(1)} 0 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: ${rhythm(7.5)};
    height: ${rhythm(7.5)};
  }
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 0;
  }

  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-start;
  }
`