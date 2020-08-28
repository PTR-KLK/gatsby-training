import React from "react"
import Layout from "../components/layout.component"
import { graphql } from "gatsby"
import {
  TopicIcon,
  ExternalLinkIcon,
  ExternalSiteIcon,
  UpdatedIcon,
} from "../styles/icons.style"
import { ExternalLink } from "../styles/links.style"
import {
  StyledListItem,
  StyledLink,
  StyledFooter,
  StyledCircle,
  StyledBioSection,
  StyledBioImg,
  StyledInfoSection,
  StyledList,
  StyledHr,
} from "../styles/portfolio.style"

function Project({ element, lastNode }) {
  return (
    <StyledListItem>
      <section>
        <h3>{element.node.name}</h3>
        <StyledHr />
        {element.node.description ? <p>{element.node.description}</p> : null}
        {element.node.repositoryTopics.nodes.length > 0 ? (
          <ul>
            {element.node.repositoryTopics.nodes.map(e => (
              <li key={e.topic.name}>
                <StyledLink
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TopicIcon size={12} />
                  <p>{e.topic.name}</p>
                </StyledLink>
              </li>
            ))}
          </ul>
        ) : null} 
        <StyledFooter>
          <span>
            <UpdatedIcon size={24} />
            <p>{element.node.pushedAt.slice(0, 10).replace(/-/g, "/")}</p>
          </span>
          <span>
            <StyledCircle color={element.node.primaryLanguage.color} />
            <p>{element.node.primaryLanguage.name}</p>
          </span>
          <StyledLink
            href={element.node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon size={24} />
            <p>Repo</p>
          </StyledLink>
          {element.node.homepageUrl ? (
            <StyledLink
              href={element.node.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalSiteIcon size={24} />
              <p>Demo</p>
            </StyledLink>
          ) : null}
        </StyledFooter>
      </section>

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
        {repositories.edges.filter(e => e.node.name!== login).map((e, idx, arr) => (
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
