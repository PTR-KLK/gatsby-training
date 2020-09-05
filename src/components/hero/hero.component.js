import React from "react"
import { Header, Section, Picture, Background } from "./hero.style"

export default function Hero({ children, heroImage }) {
  return (
    <Header>
      <Section>{children}</Section>
      {heroImage ? (
        <Picture
          imgStyle={{ objectFit: "cover" }}
          loading="eager"
          fluid={heroImage}
          alt="Grass"
        />
      ) : (
        <Background />
      )}
    </Header>
  )
}
