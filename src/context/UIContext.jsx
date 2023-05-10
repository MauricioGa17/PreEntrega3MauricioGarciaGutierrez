import { createContext, useState } from 'react'

export const UIContex = createContext();

export const UIProvider = ({ children }) => {

    const [ loading, setLoading ] = useState();

    return(
        <UIContex.Provider
            value={{
                loading,
                setLoading,
            }}
        >
            { children }
        </UIContex.Provider>
    )
}