import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  const heroDescription = <h1>{`About ${data.site.siteMetadata.title}`}</h1>

  return (
    <Layout heroDescription={heroDescription}>
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
