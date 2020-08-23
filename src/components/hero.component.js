import React from "react"
import {
  StyledInView,
  StyledFigcaption,
  StyledSection,
  StyledImg,
  StyledBackground,
  StyledIcon,
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
          <StyledBackground>
            <StyledIcon />
          </StyledBackground>
        )}
      </StyledInView>
    </header>
  )
}
