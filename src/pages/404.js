import React from "react"
import Layout from "../components/layout.component"
import { StyledSubheading } from "../styles/404.style"

export default function Home() {
  const heroDescription = <h1>404</h1>

  return (
    <Layout heroDescription={heroDescription}>
      <StyledSubheading>Page not found.</StyledSubheading>
    </Layout>
  )
}
