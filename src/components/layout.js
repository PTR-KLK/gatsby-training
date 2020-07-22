import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

function Header() {
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
    <>
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
      <nav>
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            Simple Cat Site
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
        <Link
          to={`/portfolio/`}
          css={css`
            float: right;
            margin-right: ${rhythm(0.25)};
          `}
        >
          Portfolio
        </Link>
      </nav>
    </>
  )
}

export default function Layout({ children }) {
  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      <section>{children}</section>
    </main>
  )
}
