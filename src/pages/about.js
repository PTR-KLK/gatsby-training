import React from "react"
import SEO from "../components/seo/seo.component"
import Navbar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import { Section1, Section2, Section3 } from "../components/about/about.style";
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Heading = styled.h1`
  text-align: center;
  align-self: center;
`

export default function About({ data }) {
  return (
    <>
      <div>
        <Navbar fixed />
      </div>
      <main>
        <SEO
          title="About"
          description="Some information about me, what I was doing, what am I doing, and what I want to do."
        />
        <Section1>
          <Heading>{`About ${data.site.siteMetadata.title}`}</Heading>
        </Section1>
        <Section2>
          <Heading>{`Check this out`}</Heading>
        </Section2>
        <Section3>
          <Heading>{`Contact me`}</Heading>
          <Footer absolute />
        </Section3>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
