import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

export default function Hero({ heroDescription, onChangeVisibility }) {
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
      }
    `
  )

  return (
    <header>
      <InView
        as="figure"
        onChange={onChangeVisibility}
        threshold={0.15}
        css={css`
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
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
          {heroDescription}
        </figcaption>
        <Img
          css={css`
            width: 100%;
            height: 50vh;
            z-index: 1;
            backgroundcolor: #697c17;
          `}
          imgStyle={{ objectFit: "cover", filter: "brightness(40%)" }}
          loading="eager"
          fluid={data.grass.childImageSharp.fluid}
          alt="Grass"
        />
      </InView>
    </header>
  )
}
