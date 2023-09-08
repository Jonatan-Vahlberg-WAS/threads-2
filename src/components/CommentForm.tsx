import React, { useState } from "react";
import { useUser } from "../utils/contexts/UserContext";
import { useComments } from "../utils/contexts/CommentContext";

interface CommentFormProps {
    threadId: number;
}

const CommentForm = (props: CommentFormProps) => {
    const user = useUser()
    const comments = useComments()

    const [content, setContent] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        const newCommet = {
                id: comments.state.comments.length + 1,
                content,
                creator: user.user,
                thread: props.threadId
            }
        comments.dispacth({
            type: "CREATE_COMMENT",
            payload: newCommet
        })
        setContent('')
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