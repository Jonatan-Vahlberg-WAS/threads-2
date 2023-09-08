import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { getThreadsFromLocalStorage, saveThreadsToLocalStorage } from "../helpers/localStorage"

interface ThreadState {
    threads: ThreadType[]
    actions: {
        createThread: (thread: ThreadType) => void;
        getThread: (id: number) => ThreadType | null
    }
}

const defaultState: ThreadState = {
    threads: [],
    actions: {
        createThread: (thread) => {},
        getThread: (id) => null
    }
}

const ThreadContext = createContext<ThreadState>(defaultState)

const ThreadProvider = ({children}: PropsWithChildren) => {
    const [threads, setThreads] = useState<ThreadType[]>(defaultState.threads)

    useEffect(() => {
        _getThreadsFromLocalStorage()
    },[])

    const _getThreadsFromLocalStorage = () => {
        const storedThreads = getThreadsFromLocalStorage()
        setThreads(storedThreads)
    }

    const createThread = (thread: ThreadType) => {
        setThreads(state => {
            const newThreads = [...state, thread]
            saveThreadsToLocalStorage(newThreads)
            return newThreads
        })
    }

    const getThread = (id: number) => {
        return threads.find(t => t.id === id) || null
    }

    return (
        <ThreadContext.Provider 
            value={{
                threads,
                actions: {
                    createThread,
                    getThread
                }
            }}>
                {children}
        </ThreadContext.Provider>

    )
}

const useThreads = () => {
    const threads = useContext(ThreadContext)

    return threads
}

export {
    ThreadProvider,
    useThreads
}