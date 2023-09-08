import Thread from "../components/Thread";
import ThreadForm from "../components/ThreadForm";
import { useThreads } from "../utils/contexts/ThreadContext";


const ListPage = () => {
    const threads = useThreads()

    return (
        <div>
            <h1>List Page</h1>
            {threads.threads.map((thread) => (
                <Thread thread={thread}/>
            ))}
            <ThreadForm />
        </div>
    )

}

export default ListPage;