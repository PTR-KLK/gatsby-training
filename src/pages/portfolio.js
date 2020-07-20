import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Portfolio({ data }) {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <ul>
        {data.githubData.data.user.repositories.edges.map(e => (
          <li key={e.node.name}>
            <a href={e.node.url} target="_blank" rel="noopener noreferrer">
              {e.node.name}
            </a>
          </li>
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
                stargazers {
                  totalCount
                }
                url
                forkCount
              }
            }
          }
        }
      }
    }
  }
`
