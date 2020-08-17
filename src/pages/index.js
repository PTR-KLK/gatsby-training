import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { PageLink } from "../components/links"
import Img from "gatsby-image"

export default function Home({ data }) {
  const heroDescription = <h1>Cat adventures</h1>

  return (
    <Layout heroDescription={heroDescription}>
      {data.allMarkdownRemark.edges.map(({ node }, idx, arr) => (
        <>
          <section key={node.id}>
            <PageLink
              to={node.fields.slug}
              css={css`
                display: flex;
                align-items: flex-start;
                flex-flow: column;

                @media (min-width: 768px) {
                  flex-flow: row;
                  align-items: flex-end;
                }
              `}
            >
              {node.frontmatter.featuredImage ? (
                <Img
                  css={css`
                    width: 100%;
                    height: 100%;
                    max-height: 400px;
                  `}
                  imgStyle={{ objectFit: "cover", filter: "brightness(40%)" }}
                  loading="eager"
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  alt="Grass"
                />
              ) : null}
              <figcaption
                css={css`
                  ${node.frontmatter.featuredImage
                    ? css`
                        @media (min-width: 768px) {
                          position: absolute;
                          color: white;
                          max-width: calc(800px - ${rhythm(2)});
                        }
                      `
                    : null};
                    padding: ${rhythm(1 / 4)} ${rhythm(1 / 4)} ${rhythm(1)};

                  & > * {
                    margin: 0;
                  }

                  @media (min-width: 768px) {
                    padding: 0 ${rhythm(1 / 2)} ${rhythm(1)};
                  }
                `}
              >
                <h3>{node.frontmatter.title} </h3>

                <p>{node.frontmatter.date}</p>

                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  {node.frontmatter.excerpt}
                </p>
              </figcaption>
            </PageLink>
          </section>
          {idx === arr.length - 1 ? null : <hr />}
        </>
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
