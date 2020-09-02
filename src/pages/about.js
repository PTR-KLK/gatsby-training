import React from "react"
import Layout from "../components/layout/layout.component"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Heading = styled.h1`
  text-align: center;
`

export default function About({ data }) {
  const heroContent = (
    <Heading>{`About ${data.site.siteMetadata.title}`}</Heading>
  )

  return (
    <Layout heroContent={heroContent}>
      <p>
        Cat ipsum dolor sit amet, your pillow is now my pet bed for ooooh
        feather moving feather! inspect anything brought into the house for why
        use post when this sofa is here. Sleep nap i’m so hungry i’m so hungry
        but ew not for that making bread on the bathrobe. Sleep on keyboard claw
        at curtains stretch and yawn nibble on tuna ignore human bite human hand
        but cats are the world or hiss and stare at nothing then run suddenly
        away i like big cats and i can not lie.
      </p>
    </Layout>
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
