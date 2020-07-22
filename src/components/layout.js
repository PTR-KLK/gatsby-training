import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header>
        <nav>
          <Link to={`/`}>
            <h3
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              Simple Cat Site
            </h3>
          </Link>
          <Link
            to={`/about/`}
            css={css`
              float: right;
            `}
          >
            About
          </Link>
          <Link
            to={`/portfolio/`}
            css={css`
              float: right;
              margin-right: ${rhythm(0.25)};
            `}
          >
            Portfolio
          </Link>
        </nav>
      </header>
      <section>{children}</section>
    </main>
  )
}
