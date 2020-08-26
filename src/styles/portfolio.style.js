import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { ExternalLink } from "./links.style"
import { colors } from "../utils/theme"

export const StyledListItem = styled.li`
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
        
        &:hover, &:hover a {
          background: ${colors.accent};
          color: ${colors.dark};
        }
      }
    }

    & h3,
    > p:first-of-type,
    hr {
      margin-bottom: ${rhythm(1 / 4)};
    }

    & > * {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      padding: ${rhythm(1)};
    }
  }
`

export const StyledLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
  margin: 0 0 ${rhythm(1 / 4)} 0;
    
    @media (min-width: 768px) {
      margin: 0;
    }
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & p {
    margin: 0 0 0 ${rhythm(1 / 4)};
    align-self: center;

    @media (min-width: 768px) {
      margin: 0 ${rhythm(1 / 2)} 0 ${rhythm(1 / 4)};
    }
  }

  & span {
    display: flex;
    margin: 0 0 ${rhythm(1 / 4)} 0;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`

export const StyledCircle = styled.span`
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

export const StyledHr = styled.hr`
  border-bottom: 1px solid ${colors.dark};
  margin: 0;
`
