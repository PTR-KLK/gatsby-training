import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/theme"

export const Container = styled.footer`
  align-self: flex-end;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: ${rhythm(1)};
  color: ${colors.light};
  background: linear-gradient(30deg, ${colors.secondary}, ${colors.primary});

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-flow: row;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
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
