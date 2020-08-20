import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PageLink } from "../styles/links.style"
import { MenuIcon } from "../styles/icons.style"
import {
  StyledNav,
  StyledPageLink,
  StyledImg,
  StyledButton,
  StyledSection,
} from "../styles/navbar.style"

export default function Navbar({ figureVisible }) {
  const [menuVisible, setMenuVisible] = useState(false)

  const { ...data } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        cat: file(relativePath: { eq: "images/cat.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const MenuSection = () => {
    return (
      <StyledSection menuVisible={menuVisible}>
        <PageLink to={`/`}>Blog</PageLink>{" "}
        <PageLink to={`/portfolio/`}>Portfolio</PageLink>{" "}
        <PageLink to={`/about/`}>About</PageLink>
      </StyledSection>
    )
  }

  return (
    <StyledNav figureVisible={figureVisible}>
      <StyledPageLink to={`/`}>
        <StyledImg
          loading="eager"
          fluid={data.cat.childImageSharp.fluid}
          alt="Cat staring at you"
        />
        <h2>{data.site.siteMetadata.title}</h2>
      </StyledPageLink>
      <StyledButton onClick={() => setMenuVisible(!menuVisible)}>
        <MenuIcon />
      </StyledButton>
      <MenuSection />
    </StyledNav>
  )
}
