import React from "react"
import Layout from "../components/layout.component"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { ExternalLinkIcon, UpdatedIcon } from "../styles/icons.style"
import { ExternalLink } from "../styles/links.style"

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
            <UpdatedIcon />
            <p
              css={css`
                margin: 0 ${rhythm(1 / 4)} 0 0;
              `}
            >
              {element.node.pushedAt.slice(0, 10).replace(/-/g, "/")}
            </p>
            <span
              css={css`
                border-radius: 50%;
                display: inline-block;
                height: 12px;
                position: relative;
                margin: auto 0;
                top: 1px;
                width: 12px;
                background-color: ${element.node.primaryLanguage.color};
              `}
            />
            <p>{element.node.primaryLanguage.name}</p>
          </footer>
        </section>
      </ExternalLink>
      {lastNode ? null : <hr />}
    </li>
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
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          @media (min-width: 425px) {
            flex-direction: row;
          }
        `}
      >
        <img
          src={avatarUrl}
          css={css`
            width: ${rhythm(5)};
            height: ${rhythm(5)};
            border-radius: 50%;
            margin: 0 ${rhythm(1)} 0 0;

            @media (min-width: 1440px) {
              width: ${rhythm(7.5)};
              height: ${rhythm(7.5)};
              margin: ${rhythm(1)};
            }

            @media (min-width: 2560px) {
              width: ${rhythm(15)};
              height: ${rhythm(15)};
              margin: ${rhythm(2)};
            }
          `}
          alt="Just me"
        />
        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            & > * {
              margin: 0;
            }
          `}
        >
          <h1>{name}</h1>
          <p>{login}</p>
          {isHireable ? <p>I'm Hireable</p> : null}
        </section>
      </header>
    </ExternalLink>
  )

  return (
    <Layout heroDescription={heroDescription}>
      <ul
        css={css`
          list-style: none;
          margin: 0;
        `}
      >
        {repositories.edges.map((e, idx, arr) => (
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
