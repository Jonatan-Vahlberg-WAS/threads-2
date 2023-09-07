import { useEffect, useState } from "react";
import { getCommentsFromLocalStorage } from "../utils/helpers/localStorage";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

interface CommentListProps {
    threadId: number
}
const CommentList = ({threadId}: CommentListProps) => {
    const [comments, setComments] = useState<ThreadComment[]>([])

    useEffect(() => {
        if(threadId) {
            setComments(getCommentsFromLocalStorage().filter((comment) => comment.thread === threadId))
        }
    }, [threadId])

    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            ))}
            <CommentForm
                comments={comments}
                threadId={threadId}
                setComments={setComments}
            />
        </div>
    )
}

export default CommentList;