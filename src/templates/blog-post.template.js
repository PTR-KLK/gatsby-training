import React from "react"
import { graphql } from "gatsby"
import { Header } from "./blog-post.style"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo/seo.component"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const heroDescription = (
    <Header>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.excerpt}</p>
    </Header>
  )

  return (
    <Layout
      heroDescription={heroDescription}
      heroImage={
        post.frontmatter.featuredImage
          ? post.frontmatter.featuredImage.childImageSharp.fluid
          : null
      }
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
