import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children, pageTitle }) {
  return (
    <main>
      <Header pageTitle={pageTitle} />
      <section
        css={css`
          min-height: 50vh;
          z-index: 3;
          display: flex;
          flex-wrap: wrap;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
        `}
      >
        <article
          css={css`
            margin: 0 auto;
            width: 100%;
            max-width: 800px;
            padding: ${rhythm(1)};
          `}
        >
          {children}
        </article>
        <Footer />
      </section>
    </main>
  )
}
