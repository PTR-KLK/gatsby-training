import styled from "@emotion/styled"
import { Header } from "./hero/hero.style"
import { colors } from "../../utils/theme"

export const Section1 = styled(Header)`
  height: 50vh;
  background: linear-gradient(${colors.secondary}, ${colors.primary});
`

export const Section2 = styled(Header)`
  height: 50vh;
  background: ${colors.primary};
`

export const Section3 = styled(Header)`
  height: 50vh;
  background: ${colors.secondary};
`

export const Section4 = styled(Header)`
  height: 100vh;
  background: ${colors.primary};
`
