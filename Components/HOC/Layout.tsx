import { FC, ReactNode, useState } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { COLORS } from "../../constants/theme"
import { GlobalContextProvider } from "../../context/GlobalContext"
import flex from "../../utils/theme"

const Wrapper = styled.div``
const Header = styled.div`
  ${flex("row", "space-between")}
  height: 4rem;
  position: sticky;
  top: 0;
  padding: 0.5rem 1rem;
`

const Layout: FC<{
  children: ReactNode
  siteParameters: { theme: { siteTheme: string } }
}> = ({ children, siteParameters }) => {
  const { theme } = siteParameters || {}
  const [globalTheme, setGlobalTheme] = useState(theme?.siteTheme)
  const isDarkTheme = globalTheme === "dark"

  const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      color: ${isDarkTheme ? COLORS.white : COLORS.black};
      background-color: ${isDarkTheme ? COLORS.black : COLORS.white};
      transition: background-color 0.3s ease-out;
    }
  `
  const themeProvider = {
    colors: {
      accent: COLORS.black,
      theme: isDarkTheme ? COLORS.black : COLORS.white,
      oppTheme: isDarkTheme ? COLORS.white : COLORS.black,
    },
  }

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={themeProvider}>
        <Wrapper>
          <Header>FD</Header>
          {children}
        </Wrapper>
      </ThemeProvider>
      <GlobalStyles />
    </GlobalContextProvider>
  )
}

export default Layout
