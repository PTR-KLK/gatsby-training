import React, { useState } from "react"
import { css, keyframes } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./links"
import { MenuIcon } from "../components/icons"
import { colors } from "../utils/theme"

export default function Navbar({ figureVisible }) {
  const [menuVisible, setMenuVisible] = useState(false)

  const { ...data } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        cat: file(relativePath: { eq: "images/cat.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const changeColor = keyframes`
    0%   {
      background: none;
    }
    100% {
      background: ${colors.dark};
    }
`

  const MenuSection = ({ applyCss }) => {
    return (
      <section css={applyCss}>
        <PageLink to={`/`}>Blog</PageLink>{" "}
        <PageLink to={`/portfolio/`}>Portfolio</PageLink>{" "}
        <PageLink to={`/about/`}>About</PageLink>
      </section>
    )
  }

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        width: 100%;
        padding: ${rhythm(0.125)} ${rhythm(0.5)} ${rhythm(0.125)};
        position: sticky;
        top: 0;
        z-index: 5;
        color: ${colors.light};
        background: ${colors.dark};

        @media (min-width: 768px) {
          position: fixed;
          padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
          ${!figureVisible
            ? css`
                animation: ${changeColor} 250ms ease-out;
                background: ${colors.dark};
              `
            : css`
                background: rgba(0, 0, 0, 0.6);
              `}
        }
      `}
    >
      <PageLink
        to={`/`}
        css={css`
          display: flex;
          align-items: center;
          & > * {
            margin: 0 ${rhythm(0.25)} 0 0;
          }
        `}
      >
        <Img
          css={css`
            width: ${rhythm(1.75)};
            height: ${rhythm(1.75)};
            border-radius: 50%;
            margin: 0;
          `}
          loading="eager"
          fluid={data.cat.childImageSharp.fluid}
          alt="Cat staring at you"
        />
      </PageLink>
      <PageLink
        to={`/`}
        css={css`
          @media (min-width: 768px) {
            margin: 0 auto 0 ${rhythm(0.25)};
          }
        `}
      >
        <h2
          css={css`
            margin: 0;
            text-align: center;
          `}
        >
          {data.site.siteMetadata.title}
        </h2>
      </PageLink>
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        css={css`
          background: none;
          border: none;
          padding: 0;
          color: ${colors.light};
          display: flex;
          align-items: center;

          @media (min-width: 768px) {
            display: none;
          }
        `}
      >
        <MenuIcon />
      </button>
      <MenuSection
        applyCss={css`
          ${menuVisible
            ? css`
                display: flex;
                flex-flow: column;
                position: absolute;
                text-align: center;
                width: 100%;
                top: ${rhythm(2)};
                left: 0;
                background: rgb(54, 52, 52, 0.8);
                z-index: 4;
              `
            : css`
                display: none;
              `}

          @media (min-width: 768px) {
            display: block;
          }
        `}
      />
    </nav>
  )
}
