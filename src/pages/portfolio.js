import React from "react"
import Layout from "../components/layout/layout.component"
import Project from "../components/portfolio/project/project.component"
import HeroDescription from "../components/portfolio/heroDescription/heroDescription.component"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

export default function Portfolio({ data }) {
  const { login, repositories } = data.githubData.data.user

  const List = styled.ul`
  list-style: none;
  margin: 0;
`

  return (
    <Layout
      heroDescription={<HeroDescription data={data.githubData.data.user} />}
    >
      <List>
        {repositories.edges
          .filter(e => e.node.name !== login)
          .map((e, idx, arr) => (
            <Project
              key={e.node.name}
              element={e}
              lastNode={idx === arr.length - 1}
            />
          ))}
      </List>
    </Layout>
  )
}

export const query = graphql`
  query {
    githubData {
      data {
        user {
          url
          avatarUrl
          isHireable
          name
          login
          repositories {
            edges {
              node {
                name
                url
                homepageUrl
                repositoryTopics {
                  nodes {
                    url
                    topic {
                      name
                    }
                  }
                }
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
