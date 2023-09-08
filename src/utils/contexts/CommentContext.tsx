import React, { PropsWithChildren, createContext, useContext, useEffect, useReducer} from "react"
import { getCommentsFromLocalStorage, saveCommentsToLocalStorage } from "../helpers/localStorage"

interface CommentState {
    comments: ThreadComment[]
    hasFetched: boolean
    selectedComments: ThreadComment[]
}
 
type CommentAction = 
    | { type: "SET_COMMENTS", payload: ThreadComment[] }
    | { type: "SET_SELECTED_COMMENTS", payload: ThreadComment[] }
    | { type: "CREATE_COMMENT", payload: ThreadComment }
    | { type: "REMOVE_COMMENT", payload: number }


const defaultState: CommentState = {
    comments: [],
    hasFetched: false,
    selectedComments: []
}

const commentReducer = (state:  CommentState, action: CommentAction): CommentState => {
    switch(action.type){

        case "CREATE_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case "REMOVE_COMMENT":
            return {
                ...state,
                comments: state.comments.filter(c => c.id !== action.payload)
            }
        case "SET_COMMENTS":
            return {
                ...state,
                comments: action.payload,
                hasFetched: true
            }
        case "SET_SELECTED_COMMENTS":
            return {
                ...state,
                selectedComments: action.payload,
                hasFetched: true
            } 
        default:
            return state
    }
}

const CommentContext = createContext<{
    state: CommentState;
    dispacth: React.Dispatch<CommentAction>
}>({
    state: defaultState,
    dispacth: () => {}
})

interface CommentProviderProps extends PropsWithChildren {
    threadId: number
}

const CommentProvider = ({children, threadId}: CommentProviderProps) => {
    const [state, dispacth] = useReducer(commentReducer, defaultState)

    useEffect(() => {
        dispacth({
            type: "SET_COMMENTS",
            payload: getCommentsFromLocalStorage()
        })
    },[])

    useEffect(() => {
        if(state.hasFetched){
            saveCommentsToLocalStorage(state.comments)
        }
    },[state.comments, state.hasFetched])

    useEffect(() => {
        if(threadId) {
            dispacth({
                type: "SET_SELECTED_COMMENTS",
                payload: state.comments.filter(comment => comment.thread === threadId)
            })
        }
    },[state.comments, threadId])
    

    return (
        <CommentContext.Provider
            value={{ state, dispacth }}
            >
            {children}
        </CommentContext.Provider>
    )
}

const useComments = () => {
    const comments = useContext(CommentContext)

    return comments
} 

export {
    CommentProvider,
    useComments
}