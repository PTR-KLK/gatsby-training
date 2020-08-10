import React, { useState } from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Footer from "./footer"
import Hero from "./hero"
import Navbar from "./navbar"

export default function Layout({ children, heroDescription }) {
  const [figureVisible, setFigureVisibility] = useState(true)

  const onChangeVisibility = inView => setFigureVisibility(inView)

  return (
    <main>
      <Navbar figureVisible={figureVisible} />
      <Hero
        heroDescription={heroDescription}
        onChangeVisibility={onChangeVisibility}
      />
      <article
        css={css`
          z-index: 3;
          min-height: 50vh;
          margin: 0 auto;
          width: 100%;
          max-width: 800px;
          padding: ${rhythm(0.5)};
        

          @media (min-width: 768px) {
            padding: ${rhythm(1)}; 
          }
        `}
      >
        {children}
      </article>
      <Footer />
    </main>
  )
}
