import React from "react"
import { Main, Article } from "./layout.style"
import { Global, css } from "@emotion/core"
import { colors } from "../../utils/theme"
import Footer from "../footer/footer.component"
import Navbar from "../navbar/navbar.component"
import SEO from "../seo/seo.component"

export default function Layout({ children, fixed, title, description }) {
  return (
    <>
      <Global
        styles={css`
          html {
            background: ${colors.light};
          }
        `}
      />
      <Main>
        {title && description ? (
          <SEO title={title} description={description} />
        ) : null}
        <Navbar fixed={fixed} />
        <Article>{children}</Article>
        <Footer />
      </Main>
    </>
  )
}
