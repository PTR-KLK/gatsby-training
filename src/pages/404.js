import React from "react"
import Layout from "../components/layout/layout.component"
import Header from "../components/header/header.component"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/theme"

const P = styled.p`
  text-align: center;
  padding: ${rhythm(0.5)};
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export default function Home() {
  return (
    <Layout>
      <Header title="404" />
      <P>Page not found</P>
    </Layout>
  )
}
