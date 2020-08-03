import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const heroDescription = (
    <header
      css={css`
        max-width: 800px;
        padding: 0 ${rhythm(1)};
        & > * {
          margin: 0;
          padding: ${rhythm(0.25)} 0;
        }
      `}
    >
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.excerpt}</p>
    </header>
  )

  // console.log(post.fields)

  return (
    <Layout heroDescription={heroDescription}>
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
      }
    }
  }
`
