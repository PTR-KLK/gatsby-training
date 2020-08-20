import React, { useState } from "react"
import { StyledMain, StyledArticle } from "../styles/layout.style"
import Footer from "./footer.component"
import Hero from "./hero.component"
import Navbar from "./navbar.component"

export default function Layout({ children, heroDescription, heroImage }) {
  const [figureVisible, setFigureVisibility] = useState(true)

  const onChangeVisibility = inView => setFigureVisibility(inView)

  return (
    <StyledMain>
      <Navbar figureVisible={figureVisible} />
      <Hero
        heroDescription={heroDescription}
        heroImage={heroImage}
        onChangeVisibility={onChangeVisibility}
      />
      <StyledArticle>{children}</StyledArticle>
      <Footer />
    </StyledMain>
  )
}
