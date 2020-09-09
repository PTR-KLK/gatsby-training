import React from "react"
import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/theme"

const Heading = styled.h1`
  text-align: center;
  align-self: center;
`

const Paragraph = styled.p`
  padding: ${rhythm(0.5)};
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export default function About({ data }) {
  return (
    <>
      <Hero>
        <Heading>{`About ${data.site.siteMetadata.title}`}</Heading>
      </Hero>
      <Layout
        title={"About"}
        description={
          "Some information about me, what I was doing, what am I doing, and what I want to do."
        }
        fixed
      >
        <Paragraph>
          Cat ipsum dolor sit amet, your pillow is now my pet bed for ooooh
          feather moving feather! inspect anything brought into the house for
          why use post when this sofa is here. Sleep nap i’m so hungry i’m so
          hungry but ew not for that making bread on the bathrobe. Sleep on
          keyboard claw at curtains stretch and yawn nibble on tuna ignore human
          bite human hand but cats are the world or hiss and stare at nothing
          then run suddenly away i like big cats and i can not lie.
        </Paragraph>
      </Layout>
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
