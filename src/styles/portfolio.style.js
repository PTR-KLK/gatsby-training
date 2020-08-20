import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { ExternalLink } from "../styles/links.style"

export const StyledListItem = styled.li`
  margin: 0;

  & section {
    width: 100%;
    padding: ${rhythm(1 / 2)} 0;

    & h3 {
      text-transform: capitalize;
    }

    & > * {
      margin-bottom: 0;
    }
  }
`

export const StyledLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
  margin: 0;
`

export const StyledFooter = styled.footer`
  display: flex;

  & p:first-of-type {
    margin: 0 ${rhythm(1 / 4)} 0 0;
  }
`

export const StyledCircle = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  position: relative;
  margin: auto 0;
  top: 1px;
  width: 12px;
  background-color: ${props => props.color};
`

export const StyledBioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 425px) {
    flex-direction: row;
  }
`

export const StyledBioImg = styled.img`
  width: ${rhythm(5)};
  height: ${rhythm(5)};
  border-radius: 50%;
  margin: 0 ${rhythm(1)} 0 0;

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

export const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin: 0;
  }
`
export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
`
