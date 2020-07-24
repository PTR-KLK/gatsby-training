import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./pageLink"

export default function Header() {
  const { fileName } = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "images/cat.jpg" }) {
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
      <figure
        css={css`
          
          margin: 0;
        `}
      >
        <Img
          css={css`
            width: 100%;
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
    </header>
  )
}
