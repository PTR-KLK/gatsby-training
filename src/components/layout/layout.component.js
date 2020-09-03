import React, { useState } from "react"
import { Main, Article } from "./layout.style"
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
  const [figureVisible, setFigureVisibility] = useState(true)

  const onChangeVisibility = inView => setFigureVisibility(inView)

  return (
    <Main>
      {title && description ? (
        <SEO title={title} description={description} />
      ) : null}
      <Navbar figureVisible={figureVisible} />
      <Hero heroImage={heroImage} onChangeVisibility={onChangeVisibility}>
        {heroContent}
      </Hero>
      <Article>{children}</Article>
      <Footer />
    </Main>
  )
}
