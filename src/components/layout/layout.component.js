import React from "react"
import { Main, Container, Article } from "./layout.style"
import Footer from "../footer/footer.component"
import Hero from "../hero/hero.component"
import Navbar from "../navbar/navbar.component"
import SEO from "../seo/seo.component"

export default function Layout({
  children,
  heroContent,
  heroImage,
  title,
  description,
}) {
  return (
    <Main>
      {title && description ? (
        <SEO title={title} description={description} />
      ) : null}
      <Navbar />
      <Hero heroImage={heroImage}>{heroContent}</Hero>
      <Container>
        <Article>{children}</Article>
        <Footer />
      </Container>
    </Main>
  )
}
