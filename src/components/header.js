import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
  const { fileName } = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "images/cat.png" }) {
          childImageSharp {
            fluid(maxWidth: 128, maxHeight: 152) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <header>
      <figure
        css={css`
          max-height: 100%;
          height: 100px;
          margin: 0;
        `}
      >
        <Img
          css={css`
            height: 100%;
          `}
          imgStyle={{ objectFit: "contain" }}
          loading="eager"
          fluid={fileName.childImageSharp.fluid}
          alt="Fat cat"
        />
      </figure>
      <nav
        css={css`
          display: flex;
          align-items: baseline;
          width: 100%;
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        <Link
          to={`/`}
          css={css`
            text-decoration: none;
          `}
        >
          <h3
            css={css`
              margin: 0;
            `}
          >
            Simple Cat Site
          </h3>
        </Link>
        <section
          css={css`
            margin: 0 0 0 auto;
          `}
        >
          <Link to={`/portfolio/`}>Portfolio</Link>{" "}
          <Link to={`/about/`}>About</Link>
        </section>
      </nav>
    </header>
  )
}
