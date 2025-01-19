import { createContext, FC, ReactNode, useMemo } from "react"

const initialData = {}
const GlobalContext = createContext(initialData)

export const GlobalContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const value = useMemo(() => {
    return {}
  }, [])
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export const Provider = GlobalContext.Provider
export default GlobalContext
