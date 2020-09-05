import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Nav,
  Hyperlink,
  HomeHyperlink,
  Picture,
  Button,
  Section,
  Icon,
} from "./navbar.style"

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false)

  const { ...data } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        cat: file(relativePath: { eq: "images/cat.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const Menu = () => {
    return (
      <Section menuVisible={menuVisible}>
        <Hyperlink to={`/`}>Blog</Hyperlink>{" "}
        <Hyperlink to={`/portfolio/`}>Portfolio</Hyperlink>{" "}
        <Hyperlink to={`/about/`}>About</Hyperlink>
      </Section>
    )
  }

  return (
    <Nav>
      <HomeHyperlink to={`/`}>
        <Picture
          loading="eager"
          fluid={data.cat.childImageSharp.fluid}
          alt="Cat staring at you"
        />
        <h2>{data.site.siteMetadata.title}</h2>
      </HomeHyperlink>
      <Button onClick={() => setMenuVisible(!menuVisible)}>
        <Icon />
      </Button>
      <Menu />
    </Nav>
  )
}
