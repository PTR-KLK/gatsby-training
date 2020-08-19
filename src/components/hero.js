import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"
import octoface from "../images/octoface2.svg"

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
          align-items: flex-end;
        `}
      >
        <figcaption
          css={css`
            width: 100%;
            position: absolute;
            background: none;
            color: #F1E9DA;
            z-index: 2;
            background-color:rgba(0, 0, 0, 0.6);
            padding: ${rhythm(1/2)} 0;
          `}
        >
          <section css={css`
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 ${rhythm(0.75)};

            & > * {
              margin: 0;
            }

            

          @media (min-width: 768px) {
            padding: 0 ${rhythm(2)}; 
          }
          `}
        >
            {heroDescription}
          </section>
        </figcaption>
        {heroImage ? (
          <Img
            css={css`
              width: 100%;
              height: 50vh;
              z-index: 1;
              backgroundcolor: #697c17;
            `}
            imgStyle={{ objectFit: "cover" }}
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
              background: linear-gradient(-30deg, #FF858D, #7A9CC6);
              position: relative;
              overflow: hidden;
              

              &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: -1;
                background: url(${octoface});
                background-position: right bottom;
                
              }
            `}
          ></span>
        )}
      </InView>
    </header>
  )
}
