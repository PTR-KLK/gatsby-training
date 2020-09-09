import React from "react"
import { graphql } from "gatsby"
import { Header, Section } from "./blogpost.style"
import Hero from "../components/hero/hero.component"
import Layout from "../components/layout/layout.component"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <Hero
        heroImage={
          post.frontmatter.featuredImage
            ? post.frontmatter.featuredImage.childImageSharp.fluid
            : null
        }
      >
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.excerpt}</p>
        </Header>
      </Hero>
      <Layout
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        fixed
      >
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
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
