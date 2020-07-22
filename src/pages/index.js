import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <figure
        css={css`
          max-height: 100%;
          height: 152px;
        `}
      >
        <Img
          css={css`
            height: 100%;
          `}
          imgStyle={{ objectFit: "contain" }}
          fluid={data.fileName.childImageSharp.fluid}
          alt="Fat cat"
        />
      </figure>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Cat adventures
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              height: 100%;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #4d4d4d;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </section>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    fileName: file(relativePath: { eq: "images/cat.png" }) {
      childImageSharp {
        fluid(maxWidth: 128, maxHeight: 152) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
