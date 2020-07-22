import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  )
}
