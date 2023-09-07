
interface CommentProps {
    comment: ThreadComment
}

const Comment = ({ comment }: CommentProps) => {
    return (
        <div className="comment">
        <p>
            <strong>
                👤{comment.creator.userName}:&nbsp;
            </strong>{comment.content}
        </p>
        </div>
    );
};

export default Comment;