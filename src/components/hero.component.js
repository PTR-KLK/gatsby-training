import React from "react"
import {
  StyledInView,
  StyledFigcaption,
  StyledSection,
  StyledImg,
  StyledFilter,
} from "../styles/hero.style"

export default function Hero({
  heroDescription,
  heroImage,
  onChangeVisibility,
}) {
  return (
    <header>
      <StyledInView as="figure" onChange={onChangeVisibility} threshold={0.15}>
        <StyledFigcaption>
          <StyledSection>{heroDescription}</StyledSection>
        </StyledFigcaption>
        {heroImage ? (
          <StyledImg
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            fluid={heroImage}
            alt="Grass"
          />
        ) : (
          <StyledFilter />
        )}
      </StyledInView>
    </header>
  )
}
