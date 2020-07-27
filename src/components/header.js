import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./pageLink"

export default function Header() {
  const { fileName } = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "images/grass.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <header>
      <nav
        css={css`
          display: flex;
          align-items: baseline;
          width: 100%;
          position: fixed;
          z-index: 3;
          color: #fff;
          background: green;
        `}
      >
        <PageLink to={`/`}>
          <h3
            css={css`
              margin: 0;
            `}
          >
            Simple Cat Site
          </h3>
        </PageLink>
        <section
          css={css`
            margin: 0 0 0 auto;
          `}
        >
          <PageLink to={`/portfolio/`}>Portfolio</PageLink>{" "}
          <PageLink to={`/about/`}>About</PageLink>
        </section>
      </nav>
      <figure
        css={css`
          margin: 0;
        `}
      >
        <Img
          css={css`
            width: 100%;
            height: 33vh;
            z-index: 1;
            box-shadow: none, 0 1px 2px rgba(0,0,0,0.24) inset;
          `}
          imgStyle={{ objectFit: "cover" }}
          loading="eager"
          fluid={fileName.childImageSharp.fluid}
          alt="Fat cat"
        />
      </figure>
    </header>
  )
}
