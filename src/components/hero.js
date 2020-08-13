import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

export default function Hero({
  heroDescription,
  heroImage,
  onChangeVisibility,
}) {
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
        {heroImage ? (
          <Img
            css={css`
              width: 100%;
              height: 50vh;
              z-index: 1;
              backgroundcolor: #697c17;
            `}
            imgStyle={{ objectFit: "cover", filter: "brightness(40%)" }}
            loading="eager"
            fluid={heroImage}
            alt="Grass"
          />
        ) : (
          <span
            css={css`
              width: 100%;
              height: 50vh;
              z-index: 1;
              background: black;
              background-image: radial-gradient(rgba(63, 127, 191, 0.75), black 200%);
            `}
          ></span>
        )}
      </InView>
    </header>
  )
}
