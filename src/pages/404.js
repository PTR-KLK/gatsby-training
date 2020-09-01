import React from "react"
import Layout from "../components/layout/layout.component"
import styled from "@emotion/styled"

const Subheading = styled.h3`
  text-align: center;
`

export default function Home() {
  const heroDescription = <h1>404</h1>

  return (
    <Layout heroDescription={heroDescription}>
      <Subheading>Page not found.</Subheading>
    </Layout>
  )
}
