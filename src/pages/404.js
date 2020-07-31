import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout pageTitle="404">
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
