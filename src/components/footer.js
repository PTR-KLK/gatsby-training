import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

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
    <footer
      css={css`
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
        color: #fff;
        background: #4f6d7a;
      `}
    >
      <span>
        Theme by {" "}
        <a
          href={site.siteMetadata.authorSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.siteMetadata.author}
        </a> {" "}
        created with {" "}
        <a
          href={site.siteMetadata.template}
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-starter-hello-world
        </a>
      </span>
      <span>
        Cat photo by{" "}
        <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Manja Vitolic
        </a> {" "}
        on {" "}
        <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
      <span>
        Grass photo by {" "}
        <a href="https://unsplash.com/@bradley_brister?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Bradley Brister
        </a> {" "}
        on {" "}
        <a href="https://unsplash.com/s/photos/grass?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </footer>
  )
}
