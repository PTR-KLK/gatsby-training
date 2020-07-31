import React, { useState } from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PageLink } from "./links"
import { Link } from "gatsby"
import { InView } from "react-intersection-observer"

export default function Header({ pageTitle }) {
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

  const [figureVisible, setFigureVisibility] = useState(true)

  const onChangeVisibility = inView => setFigureVisibility(inView)

  return (
    <header>
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
          background: ${figureVisible ? "none" : "#363434"};
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
      <InView
        as="figure"
        onChange={onChangeVisibility}
        threshold={0.15}
        css={css`
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        `}
      >
        <figcaption
          css={css`
            position: absolute;
            background: none;
            color: #fff;
            z-index: 2;
          `}
        >
          <h1>{pageTitle}</h1>
        </figcaption>
        <Img
          css={css`
            width: 100%;
            height: 50vh;
            z-index: 1;
            backgroundcolor: #697c17;
          `}
          imgStyle={{ objectFit: "cover", filter: "brightness(50%)" }}
          loading="eager"
          fluid={data.grass.childImageSharp.fluid}
          alt="Grass"
        />
      </InView>
    </header>
  )
}
