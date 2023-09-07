

interface ThreadDetailProps {
    thread: ThreadType | null
}

const ThreadDetail = (props: ThreadDetailProps) => {
    const { thread } = props
    if(!thread) {
        return <div>Thread not found</div>
    }

    return (
        <div>
        <h1>{thread.title}</h1>
        <p>
            👤{thread.creator.userName}
        </p>

        <p>{thread.description}</p>
        </div>
    );
};

export default ThreadDetail;
