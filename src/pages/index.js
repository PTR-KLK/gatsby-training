import React from "react"
import Layout from "../components/layout/layout.component"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import BlogpostLink from "../components/index/blogpostLink/blogpostLink.component"

const Heading = styled.h1`
    text-align: center;
  `

export default function Home({ data }) {
  
  const heroContent = <Heading>Cat adventures</Heading>

  return (
    <Layout heroContent={heroContent}>
      {data.allMarkdownRemark.edges.map(({ node }, idx, arr) => (
        <section key={node.id}>
          <BlogpostLink node={node} idx={idx} arr={arr} />
        </section>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
