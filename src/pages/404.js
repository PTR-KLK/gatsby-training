import React from "react"
import Layout from "../components/layout/layout.component"
import { Hr } from "../utils/theme"
import styled from "@emotion/styled"

const Heading = styled.h2`
  text-align: center;
`

const Subheading = styled.h3`
  text-align: center;
`

export default function Home() {

  return (
    <Layout>
      <Heading>404</Heading>
      <Hr />
      <Subheading>Page not found.</Subheading>
    </Layout>
  )
}
