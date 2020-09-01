import styled from "@emotion/styled"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/theme"

export const BioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 425px) {
    flex-direction: row;
  }
`

export const Picture = styled.img`
  width: ${rhythm(5)};
  height: ${rhythm(5)};
  border-radius: 50%;
  margin: 0;

  @media (min-width: 768px) {
    margin: 0 ${rhythm(1)} 0 0;
  }

  @media (min-width: 1440px) {
    width: ${rhythm(7.5)};
    height: ${rhythm(7.5)};
    margin: ${rhythm(1)};
  }

  @media (min-width: 2560px) {
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

export const Hyperlink = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }
`