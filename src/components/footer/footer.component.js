import React from "react"
import { Container, Section, Hyperlink } from "./footer.style"

export default function Footer() {
  return (
    <Container>
      <span>
        Powered by{" "}
        <Hyperlink
          href={"https://www.gatsbyjs.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Hyperlink>
      </span>
      <Section>
        <span>
          <Hyperlink
            href="https://unsplash.com/s/photos/cat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cat photo
          </Hyperlink>{" "}
          by{" "}
          <Hyperlink
            href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manja Vitolic
          </Hyperlink>
        </span>
      </Section>
    </Container>
  )
}
