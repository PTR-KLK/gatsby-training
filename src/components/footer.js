import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

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
    <footer>
      <hr />
      {site.siteMetadata.created} by{" "}
      <a
        href={site.siteMetadata.authorSite}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        {site.siteMetadata.author}
      </a>{" "}
      with{" "}
      <a
        href={site.siteMetadata.template}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        gatsby
      </a>
    </footer>
  )
}
