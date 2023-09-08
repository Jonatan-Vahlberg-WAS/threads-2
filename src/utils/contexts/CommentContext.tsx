import React, { Children, PropsWithChildren, createContext, useContext, useReducer} from "react"

interface CommentState {
    comments: ThreadComment[]
}
 
type CommentAction = 
    | { type: "CREATE_COMMENT", payload: ThreadComment }
    | { type: "REMOVE_COMMENT", payload: number }


const defaultState: CommentState = {
    comments: []
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

const CommentProvider = ({children}: PropsWithChildren) => {
    const [state, dispacth] = useReducer(commentReducer, defaultState)

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