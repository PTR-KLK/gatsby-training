import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

function Project({ element }) {
  return (
    <li>
      <a
        href={element.node.url}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-decoration: none;
          color: inherit;
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
        {element.node.description ? <p>{element.node.description}</p> : null}
      </a>
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
        {data.githubData.data.user.repositories.edges.map(e => (
          <Project key={e.node.name} element={e} />
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
                stargazers {
                  totalCount
                }
                description
              }
            }
          }
        }
      }
    }
  }
`
