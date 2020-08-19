import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout.component"
import SEO from "../components/seo.component"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const heroDescription = (
    <header
      css={css`
        max-width: 800px;
        padding: 0 ${rhythm(0.5)};
        & > * {
          margin: 0;
          padding: ${rhythm(0.25)} 0;
        }

        @media (min-width: 768px) {
          padding: 0 ${rhythm(1)};
        }
      `}
    >
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.excerpt}</p>
    </header>
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
