import styled from "@emotion/styled"
import { colors } from "../utils/theme"
import { rhythm } from "../utils/typography"
import { PageLink } from "../styles/links.style"
import BackgroundImage from "gatsby-background-image"

export const StyledHeading = styled.h1`
  text-align: center;
`

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledPostLinkHr = styled.hr`
  border-bottom: 1px solid ${props => props.color};
  margin: 0;
`

export const StyledPageLink = styled(PageLink)`
  padding: 0;

  & h3,
  p {
    margin: 0;
  }
`

export const StyledBackgroundImage = styled(BackgroundImage)`
  padding: ${rhythm(1 / 2)};
  color: ${colors.light};

  &:after,
  &:before {
    filter: brightness(40%);
  }

  &:hover {
    &:after,
    &:before {
      filter: grayscale(100%) contrast(300%) brightness(20%);
    }
  }

  @media (min-width: 768px) {
    padding: ${rhythm(1)};
  }
`

export const StyledSection = styled.section`
  padding: 0 ${rhythm(1 / 2)};

  @media (min-width: 768px) {
    padding: 0 ${rhythm(1)};
  }
`

export const StyledHr = styled.hr`
  border-bottom: 1px solid ${colors.dark};
  margin: ${rhythm(1 / 2)} 0;

  @media (min-width: 768px) {
    margin: ${rhythm(1)} 0;
  }
`
