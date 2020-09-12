import React from "react"
import { Header, Section } from "./hero.style"

export default function Hero({ children }) {
  return (
    <Header>
      <Section>{children}</Section>
    </Header>
  )
}
