import React from "react"
import { graphql } from "gatsby"
import { colors } from "../utils/theme"
import Layout from "../components/layout.component"
import {
  StyledHeading,
  StyledHeader,
  StyledPostLinkHr,
  StyledPageLink,
  StyledBackgroundImage,
  StyledSection,
  StyledHr,
} from "../styles/index.style"

export default function Home({ data }) {
  const heroDescription = <StyledHeading>Cat adventures</StyledHeading>

  const LinkContent = ({ node, hrColor }) => {
    return (
      <>
        <StyledHeader>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </StyledHeader>
        <StyledPostLinkHr color={hrColor} />
        <p>{node.frontmatter.excerpt}</p>
      </>
    )
  }

  const PostLink = ({ node }) => {
    return (
      <StyledPageLink to={node.fields.slug}>
        {node.frontmatter.featuredImage ? (
          <StyledBackgroundImage
            Tag="section"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            backgroundColor={colors.light}
          >
            <LinkContent node={node} hrColor={colors.light} />
          </StyledBackgroundImage>
        ) : (
          <StyledSection>
            <LinkContent node={node} hrColor={colors.dark} />
          </StyledSection>
        )}
      </StyledPageLink>
    )
  }

  return (
    <Layout heroDescription={heroDescription}>
      {data.allMarkdownRemark.edges.map(({ node }, idx, arr) => (
        <section key={node.id}>
          <PostLink node={node} />
          {idx === arr.length - 1 ? null : <StyledHr />}
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
