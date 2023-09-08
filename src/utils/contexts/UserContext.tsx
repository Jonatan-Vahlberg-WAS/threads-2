import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { getUserFromLocalStorage } from "../helpers/localStorage"

interface UserState {
    user: User
}

const defaultState: UserState = {
    user: {
        id: -1,
	    name: "John Doe",
	    userName: "anonymous"
    }
}

const UserContext = createContext<UserState>(defaultState)

const UserProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User>(defaultState.user)

    useEffect(() => {
        _getUserFromLocalStorage()
    },[])

    const _getUserFromLocalStorage = () => {
        const storedUser = getUserFromLocalStorage()
        setUser(storedUser)
    }

    return (
        <UserContext.Provider 
            value={{
                user
            }}>
                {children}
        </UserContext.Provider>

    )
}

const useUser = () => {
    const threads = useContext(UserContext)

    return threads
}

export {
    UserProvider,
    useUser
}