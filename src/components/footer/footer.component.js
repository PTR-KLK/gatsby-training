import React from "react"
import { Container, Section, Hyperlink, FooterHr } from "./footer.style"

export default function Footer({ absolute }) {
  return (
    <Container absolute={absolute}>
      <FooterHr absolute={absolute} />
      <Section>
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
        <section>
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
        </section>
      </Section>
    </Container>
  )
}
