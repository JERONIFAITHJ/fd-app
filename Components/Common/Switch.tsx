import styled, { css } from "styled-components"
import { BORDER_RADIUS } from "../../constants/theme"
import { Dispatch, SetStateAction } from "react"
import { setSiteTheme } from "../../cookies"

const StyledSwitch = styled.div<{ toggle: string }>`
  width: 3rem;
  background-color: ${({ theme }) => theme.colors?.oppTheme};
  border-radius: ${BORDER_RADIUS.md};
  height: 1.5rem;
  cursor: pointer;
  padding: 2px;
`
const Indicator = styled.div<{ toggle: string }>`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors?.theme};
  border-radius: ${BORDER_RADIUS.round};
  transition: all 0.3s ease-out;
  transform: translate(0, -0.5px);
  ${({ toggle }) =>
    toggle === "dark"
      ? css`
          transform: translate(1.5rem, -0.5px);
        `
      : ""}
`
const Switch = ({
  siteTheme,
  setGlobalTheme,
}: {
  siteTheme: string
  setGlobalTheme: Dispatch<SetStateAction<string>>
}) => {
  const onClick = () => {
    setSiteTheme(siteTheme === "dark" ? "normal" : "dark")
    setGlobalTheme((prev) => (prev === "dark" ? "normal" : "dark"))
  }
  return (
    <StyledSwitch toggle={siteTheme} onClick={onClick}>
      <Indicator toggle={siteTheme} />
    </StyledSwitch>
  )
}

export default Switch
