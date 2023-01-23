import * as React from "react"

const defaultValues = {
}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider>
      {children}
    </StoreContext.Provider>
  )
}