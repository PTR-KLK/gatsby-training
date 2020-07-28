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
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1)};
          z-index: 3;
        `}
      >
        {children}
        <Footer />
      </section>
    </main>
  )
}
