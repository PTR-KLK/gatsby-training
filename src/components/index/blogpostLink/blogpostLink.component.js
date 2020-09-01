import React from "react"
import { colors } from "../../../utils/theme"
import {
  Header,
  HeaderHr,
  Hyperlink,
  BackgroundImageSection,
  Section,
  Hr,
} from "./blogpostLink.style"

export default function BlogpostLink({ node, idx, arr }) {
  const Excerpt = () => {
    return (
      <>
        <Header>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </Header>
        <HeaderHr color={colors.dark} />
        <p>{node.frontmatter.excerpt}</p>
      </>
    )
  }

  return (
    <>
      <Hyperlink to={node.fields.slug}>
        {node.frontmatter.featuredImage ? (
          <BackgroundImageSection
            Tag="section"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            backgroundColor={colors.light}
          >
            <Excerpt />
          </BackgroundImageSection>
        ) : (
          <Section>
            <Excerpt />
          </Section>
        )}
      </Hyperlink>
      {idx === arr.length - 1 ? null : <Hr />}
    </>
  )
}
