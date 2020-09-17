import React from "react"
import Layout from "../components/layout/layout.component"
import { Hyperlink } from "../components/index/index.style"
import Header from "../components/header/header.component"
import { Hr } from "../utils/theme"
import { graphql } from "gatsby"
import BlogpostLink from "../components/index/blogpostLink/blogpostLink.component"

export default function Home({ data }) {

  return (
    <Layout
      title={"Main page"}
      description={"Recent news from my journey in the web development world."}
    >
      <Header title="Cat adventures" />
      {data.allMarkdownRemark.edges.map(({ node }, idx, arr) => (
        <Hyperlink key={node.id} to={node.fields.slug}>
          <BlogpostLink node={node} />
          {idx !== arr.length - 1 ? <Hr /> : null}
        </Hyperlink>
      ))}
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
                fluid(
                  maxWidth: 2560
                  duotone: { highlight: "#F8F7FF", shadow: "#1E1E24" }
                ) {
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
