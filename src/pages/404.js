import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function Home() {
  const heroDescription = <h1>404</h1>

  return (
    <Layout heroDescription={heroDescription}>
      <h3
        css={css`
          text-align: center;
        `}
      >
        Page not found.
      </h3>
    </Layout>
  )
}
