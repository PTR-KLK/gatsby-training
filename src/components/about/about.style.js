import styled from "@emotion/styled"
import { Header } from "./hero/hero.style"
import { colors } from "../../utils/theme"

export const Section1 = styled(Header)`
  height: 50vh;
  background: linear-gradient(-30deg, ${colors.secondary}, ${colors.primary});
  scroll-snap-align: start;
`

export const Section2 = styled(Header)`
  height: 50vh;
  background: ${colors.secondary};
  scroll-snap-align: start;
`

export const Section3 = styled(Header)`
  height: 100vh;
  background: ${colors.primary};
  scroll-snap-align: start;
`
