import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledFooter, StyledSection } from "../styles/footer.style"
import { ExternalLink } from "../styles/links.style"

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
    <StyledFooter>
      <span>
        Theme by{" "}
        <ExternalLink
          href={site.siteMetadata.authorSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.siteMetadata.author}
        </ExternalLink>{" "}
        powered by{" "}
        <ExternalLink
          href={"https://www.gatsbyjs.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </ExternalLink>
      </span>
      <StyledSection>
        <span>
          Cat photo by{" "}
          <ExternalLink
            href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manja Vitolic
          </ExternalLink>{" "}
          on{" "}
          <ExternalLink
            href="https://unsplash.com/s/photos/cat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </ExternalLink>
        </span>
      </StyledSection>
    </StyledFooter>
  )
}
