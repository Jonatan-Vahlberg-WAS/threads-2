import React, { useState } from "react";
import { getUserFromLocalStorage, saveCommentsToLocalStorage } from "../utils/helpers/localStorage";

interface CommentFormProps {
    comments: ThreadComment[]
    threadId: number;
    setComments: React.Dispatch<React.SetStateAction<ThreadComment[]>>
}

const CommentForm = (props: CommentFormProps) => {
    const [content, setContent] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLElement>) => {
        const user = getUserFromLocalStorage()
        e.preventDefault()
        const newCommets =[
            ...props.comments,
            {
                id: props.comments.length + 1,
                content,
                creator: user,
                thread: props.threadId
            }
        ]
        saveCommentsToLocalStorage(newCommets)
        setContent('')
        props.setComments(newCommets)
    }

    return (
        <div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What are your thoughts?"
                rows={5}
                cols={50}
            />
            <br></br>
            <button onClick={onSubmit}>Post</button>
        </div>
    )
}

export default CommentForm;