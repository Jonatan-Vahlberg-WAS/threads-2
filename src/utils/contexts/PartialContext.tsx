import { createContext, useContext } from "react"

interface PartialState {
    data: any[]
    hasFetched: boolean
}

const defaultState = {
    data: [],
    hasFetched: false,
}

// Create context using partial context method

const PartialContext = createContext<Partial<PartialState>>(defaultState)

const PartialProvider = ({children}: any) => {
    return (
        <PartialContext.Provider value={defaultState}>
            {children}
        </PartialContext.Provider>
    )
}

const usePartial = () => {
    const partial = useContext(PartialContext)

    return partial
}


const App = () => {
    return (
        <PartialProvider>
            <Partial/>
        </PartialProvider>
    )
}

const Partial = () => {
    const partial = usePartial()

    return (
        <div>
            {partial.data?.map(d => <p>{d}</p>)}
        </div>
    )
}

