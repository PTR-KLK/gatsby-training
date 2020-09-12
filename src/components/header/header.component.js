import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Subheading } from "./header.style"
import { Hr } from "../../utils/theme"

export default function Header({ title }) {
  const { ...data } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Subheading>{data.site.siteMetadata.title}</Subheading>
      <Heading>{title}</Heading>
      <Hr />
    </>
  )
}
