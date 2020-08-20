import React from "react"
import Layout from "../components/layout.component"
import { graphql } from "gatsby"
import { ExternalLinkIcon, UpdatedIcon } from "../styles/icons.style"
import { ExternalLink } from "../styles/links.style"
import {
  StyledLink,
  StyledListItem,
  StyledFooter,
  StyledCircle,
  StyledBioSection,
  StyledBioImg,
  StyledInfoSection,
  StyledList,
} from "../styles/portfolio.style"

function Project({ element, lastNode }) {
  return (
    <StyledListItem>
      <StyledLink
        href={element.node.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkIcon size={24} />
        <section>
          <h3>{element.node.name}</h3>
          {element.node.description ? <p>{element.node.description}</p> : null}
          <StyledFooter>
            <UpdatedIcon />
            <p>{element.node.pushedAt.slice(0, 10).replace(/-/g, "/")}</p>
            <StyledCircle color={element.node.primaryLanguage.color} />
            <p>{element.node.primaryLanguage.name}</p>
          </StyledFooter>
        </section>
      </StyledLink>
      {lastNode ? null : <hr />}
    </StyledListItem>
  )
}

export default function Portfolio({ data }) {
  const {
    url,
    avatarUrl,
    name,
    login,
    isHireable,
    repositories,
  } = data.githubData.data.user

  const heroDescription = (
    <ExternalLink href={url} target="_blank" rel="noopener noreferrer">
      <StyledBioSection>
        <StyledBioImg src={avatarUrl} alt="Just me" />
        <StyledInfoSection>
          <h1>{name}</h1>
          <p>{login}</p>
          {isHireable ? <p>I'm Hireable</p> : null}
        </StyledInfoSection>
      </StyledBioSection>
    </ExternalLink>
  )

  return (
    <Layout heroDescription={heroDescription}>
      <StyledList>
        {repositories.edges.map((e, idx, arr) => (
          <Project
            key={e.node.name}
            element={e}
            lastNode={idx === arr.length - 1}
          />
        ))}
      </StyledList>
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
