import React from "react"
import { Nav, Hyperlink } from "./sidebar.style"

export default function Sidebar() {
  return (
    <Nav>
      <Hyperlink to="/about#section4" stripHash>
        #4
      </Hyperlink>
      <Hyperlink to="/about#section3" stripHash>
        #3
      </Hyperlink>
      <Hyperlink to="/about#section2" stripHash>
        #2
      </Hyperlink>
      <Hyperlink to="/about#section1" stripHash>
        #1
      </Hyperlink>
    </Nav>
  )
}
