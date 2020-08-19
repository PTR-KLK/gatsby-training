import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { PageLink } from "../components/links"
import BackgroundImage from "gatsby-background-image"

export default function Home({ data }) {
  const heroDescription = <h1>Cat adventures</h1>

  const LinkContent = ({ node, hrColor }) => {
    return (
      <>
        <header
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          `}
        >
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </header>
        <hr
          css={css`
            border-bottom: 1px solid ${hrColor};
            margin: 0;
          `}
        />
        <p>{node.frontmatter.excerpt}</p>
      </>
    )
  }

  const PostLink = ({ node }) => {
    return (
      <PageLink
        to={node.fields.slug}
        css={css`
          padding: 0;

          & h3,
          p {
            margin: 0;
          }
        `}
      >
        {node.frontmatter.featuredImage ? (
          <BackgroundImage
            Tag="section"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            backgroundColor="#F1E9DA"
            css={css`
              padding: ${rhythm(1 / 2)};
              color: #F1E9DA;

              &:after,
              &:before {
                filter: brightness(40%);
              }

              &:hover {
                &:after,
                &:before {
                  filter: grayscale(100%) contrast(300%) brightness(20%);
                }
              }

              @media (min-width: 768px) {
                padding: ${rhythm(1)};
              }
            `}
          >
            <LinkContent node={node} hrColor="#F1E9DA" />
          </BackgroundImage>
        ) : (
          <section
            css={css`
              padding: 0 ${rhythm(1 / 2)};

              @media (min-width: 768px) {
                padding: 0 ${rhythm(1)};
              }
            `}
          >
            <LinkContent node={node} hrColor="black" />
          </section>
        )}
      </PageLink>
    )
  }

  return (
    <Layout heroDescription={heroDescription}>
      {data.allMarkdownRemark.edges.map(({ node }, idx, arr) => (
        <section key={node.id}>
          <PostLink node={node} />
          {idx === arr.length - 1 ? null : (
            <hr
              css={css`
                margin: ${rhythm(1 / 2)} 0;

                @media (min-width: 768px) {
                  margin: ${rhythm(1)};
                }
              `}
            />
          )}
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
