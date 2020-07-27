import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./pageLink"

export default function Header() {
  const { ...data } = useStaticQuery(
    graphql`
      query {
        grass: file(relativePath: { eq: "images/grass.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
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

  return (
    <header>
      <nav
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
          position: sticky;
          z-index: 3;
          color: #fff;
          background: #697c17;
        `}
      >
        <PageLink to={`/`}>
          <Img
            css={css`
              width: ${rhythm(1.75)};
              height: ${rhythm(1.75)};
              border-radius: ${rhythm(0.25)};
            `}
            loading="eager"
            fluid={data.cat.childImageSharp.fluid}
            alt="Cat staring at you"
          />
        </PageLink>
        <section>
          <PageLink to={`/`}>Blog</PageLink>{" "}
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
            box-shadow: none, 0 1px 2px rgba(0, 0, 0, 0.24) inset;
            backgroundcolor: #697c17;
          `}
          imgStyle={{ objectFit: "cover" }}
          loading="eager"
          fluid={data.grass.childImageSharp.fluid}
          alt="Grass"
        />
      </figure>
    </header>
  )
}
