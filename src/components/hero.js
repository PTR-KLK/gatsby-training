import React from "react"
import { css, keyframes } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"
import octoface from "../images/octoface2.svg"

const moveBackground = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

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
                width: 160%;
                padding-top: 160%;
                top: -10%;
                left: -30%;
                z-index: -1;
                background: url(${octoface});
                background-position: right bottom;
                animation: ${moveBackground} 30s linear infinite;

                @media (min-width: 768px) {
                  top: -80%;
                }
              }
            `}
          ></span>
        )}
      </InView>
    </header>
  )
}
