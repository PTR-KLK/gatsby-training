import React from "react"
import { css, keyframes } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./links"
import { Link } from "gatsby"

export default function Navbar({ figureVisible }) {
  const { ...data } = useStaticQuery(
    graphql`
      query {
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
      background: #363434;
    }
`

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
        position: fixed;
        z-index: 4;
        color: #fff;

        ${!figureVisible
          ? css`
              animation: ${changeColor} 1s ease-out;
              background: #363434;
            `
          : css`
              background: none;
            `}
      `}
    >
      <Link to={`/`}>
        <Img
          css={css`
            width: ${rhythm(1.75)};
            height: ${rhythm(1.75)};
            border-radius: 50%;
          `}
          loading="eager"
          fluid={data.cat.childImageSharp.fluid}
          alt="Cat staring at you"
        />
      </Link>
      <section>
        <PageLink to={`/`}>Blog</PageLink>{" "}
        <PageLink to={`/portfolio/`}>Portfolio</PageLink>{" "}
        <PageLink to={`/about/`}>About</PageLink>
      </section>
    </nav>
  )
}
