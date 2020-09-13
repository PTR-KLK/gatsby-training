import styled from "@emotion/styled"
import { keyframes } from '@emotion/core'
import { Header } from "./hero/hero.style"
import { colors } from "../../utils/theme"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Section1 = styled(Header)`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    padding-top: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: linear-gradient(-30deg, ${colors.primary}, ${colors.secondary});
    animation: ${rotate} 10s linear infinite;
  }
`

export const Section2 = styled(Header)`
  height: 50vh;
  background: ${colors.primary};
  scroll-snap-align: start;
`

export const Section3 = styled(Header)`
  height: 50vh;
  background: ${colors.secondary};
  scroll-snap-align: start;
`

export const Section4 = styled(Header)`
  height: 100vh;
  background: ${colors.primary};
  scroll-snap-align: start;
`
