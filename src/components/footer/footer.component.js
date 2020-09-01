import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Section, Hyperlink } from "./footer.style"

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            created
            authorSite
            template
            author
          }
        }
      }
    `
  )

  return (
    <Container>
      <span>
        Theme by{" "}
        <Hyperlink
          href={site.siteMetadata.authorSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.siteMetadata.author}
        </Hyperlink>{" "}
        powered by{" "}
        <Hyperlink
          href={"https://www.gatsbyjs.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Hyperlink>
      </span>
      <Section>
        <span>
          Cat photo by{" "}
          <Hyperlink
            href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manja Vitolic
          </Hyperlink>{" "}
          on{" "}
          <Hyperlink
            href="https://unsplash.com/s/photos/cat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </Hyperlink>
        </span>
      </Section>
    </Container>
  )
}
