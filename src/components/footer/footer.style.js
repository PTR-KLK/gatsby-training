import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { colors, breakpoints, pageWidth, Hr } from "../../utils/theme"

export const Container = styled.footer`
  ${props =>
    props.absolute
      ? css`
          position: absolute;
          bottom: 0;
          z-index: 3;
          color: ${colors.light};
        `
      : css`
          color: ${colors.dark};
        `}

  width: 100%;
  max-width: ${pageWidth};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
`

export const Section = styled.section`
  width: 100%;
  padding: ${rhythm(0.5)};
  text-align: center;

  & > * {
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
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

export const FooterHr = styled(Hr)`
  ${props =>
    props.absolute
      ? css`
          border-bottom: 1px solid ${colors.light};
        `
      : css`
          border-bottom: 1px solid ${colors.dark};
        `}
`
