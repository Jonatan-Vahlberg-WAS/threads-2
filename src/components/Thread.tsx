import { useNavigate } from "react-router-dom";


const Thread = ({ thread }: { thread: ThreadType }) => {
    const navigate = useNavigate();
    const icon = thread.category === "THREAD" ? "📋" : "❓"
    return (
        <a href={`/thread/${thread.id}`} onClick={() => navigate(`/thread/${thread.id}`)}>
        <div>
            <h3>{icon}{thread.title}</h3>
            <p>
            👤{thread.creator.userName}
            </p>
            <p>
                {thread.description.substring(0, 90)}{thread.description.length > 90 ? "..." : ""}
            </p>
            <br></br>
        </div>
        </a>
    )
}

export default Thread;