import React from "react"
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
      >
        {site.siteMetadata.author}
      </a>{" "}
      with{" "}
      <a
        href={site.siteMetadata.template}
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsby
      </a>
      <br />
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Manja Vitolic
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </footer>
  )
}
