import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"
import { ExternalLinkIcon } from "../components/icons"
import { ExternalLink } from "../components/links"

function Project({ element, lastNode }) {
  return (
    <li
      css={css`
        margin: 0;
      `}
    >
      <ExternalLink
        href={element.node.url}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          display: flex;
          align-items: center;
          margin: 0;
        `}
      >
        <ExternalLinkIcon size={24} />
        <section
          css={css`
            width: 100%;
            padding: ${rhythm(1 / 2)} 0;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
              text-transform: capitalize;
            `}
          >
            {element.node.name}
          </h3>
          {element.node.description ? (
            <p
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {element.node.description}
            </p>
          ) : null}
          <footer
            css={css`
              display: flex;
            `}
          >
            <p
              css={css`
                margin: 0 ${rhythm(1 / 4)} 0 0;
              `}
            >
              Updated: {element.node.pushedAt.slice(0, 10)}
            </p>
            <p>
              <span
                css={css`
                  border-radius: 50%;
                  display: inline-block;
                  height: 12px;
                  position: relative;
                  top: 1px;
                  width: 12px;
                  background-color: ${element.node.primaryLanguage.color};
                `}
              />{" "}
              {element.node.primaryLanguage.name}
            </p>
          </footer>
        </section>
      </ExternalLink>
      {lastNode ? null : <hr />}
    </li>
  )
}

export default function Portfolio({ data }) {
  return (
    <Layout pageTitle="Portfolio">
      <ul
        css={css`
          list-style: none;
          margin: 0;
        `}
      >
        {data.githubData.data.user.repositories.edges.map((e, idx, arr) => (
          <Project
            key={e.node.name}
            element={e}
            lastNode={idx === arr.length - 1}
          />
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                name
                url
                description
                pushedAt
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
