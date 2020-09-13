import React from "react"
import SEO from "../components/seo/seo.component"
import Navbar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import { Section1, Section2, Section3, Section4 } from "../components/about/about.style"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Heading = styled.h1`
  text-align: center;
  align-self: center;
`

export default function About({ data }) {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-snap-type: y proximity;
          }
        `}
      />
      <Navbar fixed />
      <SEO
        title="About"
        description="Some information about me, what I was doing, what am I doing, and what I want to do."
      />
      <main>
        <Section1>
          <Heading>{`About ${data.site.siteMetadata.title}`}</Heading>
        </Section1>
        <Section2>
          <Heading>{`Check this out`}</Heading>
        </Section2>
        <Section3>
          <Heading>{`You can also check this`}</Heading>
        </Section3>
        <Section4>
          <Heading>{`Contact me`}</Heading>
          <Footer absolute />
        </Section4>
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
