import styled from "@emotion/styled"
import { colors } from "../../../utils/theme"

export const Header = styled.header`
  height: 100vh;
  color: ${colors.light};
  z-index: 1;
  position: sticky;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  padding: 0;

  & > * {
    margin: 0;
  }
`
