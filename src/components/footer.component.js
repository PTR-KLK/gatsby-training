import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { ExternalLink } from "../styles/links.style"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

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
        flex-flow: column;
        align-items: center;
        width: 100%;
        padding: ${rhythm(1)};
        color: ${colors.light};
        background: linear-gradient(
          30deg,
          ${colors.secondary},
          ${colors.primary}
        );

        @media (min-width: 768px) {
          justify-content: space-between;
          flex-flow: row;
        }
      `}
    >
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
      <section
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          @media (min-width: 768px) {
            align-items: flex-end;
          }
        `}
      >
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
      </section>
    </footer>
  )
}
