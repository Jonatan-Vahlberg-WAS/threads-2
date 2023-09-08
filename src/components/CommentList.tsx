import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useComments } from "../utils/contexts/CommentContext";

interface CommentListProps {
    threadId: number
}
const CommentList = ({threadId}: CommentListProps) => {
    const {
        state: {
            selectedComments
        }
    } = useComments()

    return (
        <div>
            <h1>Comments</h1>
            {selectedComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            ))}
            <CommentForm
                threadId={threadId}
            />
        </div>
    )
}

export default CommentList;