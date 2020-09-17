import React from "react"
import { graphql } from "gatsby"
import { Image, Header, Section} from "./blogpost.style"
import { Hr } from "../utils/theme"
import Layout from "../components/layout/layout.component"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <Layout
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      >
        {post.frontmatter.featuredImage ? (
          <Image
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        ) : null}
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.excerpt}</p>
        </Header>
        <Hr />  
        <Section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`
