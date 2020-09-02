import React, { useState } from "react"
import { Main, Article } from "./layout.style"
import Footer from "../footer/footer.component"
import Hero from "../hero/hero.component"
import Navbar from "../navbar/navbar.component"

export default function Layout({ children, heroContent, heroImage }) {
  const [figureVisible, setFigureVisibility] = useState(true)

  const onChangeVisibility = inView => setFigureVisibility(inView)

  return (
    <Main>
      <Navbar figureVisible={figureVisible} />
      <Hero heroImage={heroImage} onChangeVisibility={onChangeVisibility}>
        {heroContent}
      </Hero>
      <Article>{children}</Article>
      <Footer />
    </Main>
  )
}
