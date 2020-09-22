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

export default function Navbar({ fixed }) {
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
      <Section fixed={fixed} menuVisible={menuVisible}>
        <Hyperlink fade duration={0.5} to={`/`}>
          Blog
        </Hyperlink>{" "}
        <Hyperlink fade duration={0.5} to={`/portfolio/`}>
          Portfolio
        </Hyperlink>{" "}
        <Hyperlink fade duration={0.5} to={`/about/`}>
          About
        </Hyperlink>
      </Section>
    )
  }

  return (
    <Nav fixed={fixed}>
      <HomeHyperlink fade duration={0.5} to={`/`}>
        <Picture
          loading="eager"
          fluid={data.cat.childImageSharp.fluid}
          alt="Cat staring at you"
        />
        <h2>{data.site.siteMetadata.title}</h2>
      </HomeHyperlink>
      <Button fixed={fixed} onClick={() => setMenuVisible(!menuVisible)}>
        <Icon />
      </Button>
      <Menu />
    </Nav>
  )
}
