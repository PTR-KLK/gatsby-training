import React from "react"
import { Header, Container, Image } from "./blogpostLink.style"

export default function BlogpostLink({ node }) {
  return (
    <Container>
      {node.frontmatter.featuredImage ? (
        <Image
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          objectFit="contain"
          alt=""
        />
      ) : null}
      <Header>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.date}</p>
      </Header>
      <p>{node.frontmatter.excerpt}</p>
    </Container>
  )
}
