import { useEffect, useState } from "react";
import Thread from "../components/Thread";
import { getThreadsFromLocalStorage } from "../utils/helpers/localStorage";
import ThreadForm from "../components/ThreadForm";


const ListPage = () => {
    const [threads, setThreads] = useState<ThreadType[]>([])
    console.log(threads)
    useEffect(() => {
        const threads = getThreadsFromLocalStorage()
        setThreads(threads)
    }, [])

    return (
        <div>
            <h1>List Page</h1>
            {threads.map((thread) => (
                <Thread thread={thread}/>
            ))}
            <ThreadForm threads={threads} setThreads={setThreads}/>
        </div>
    )

}

export default ListPage;