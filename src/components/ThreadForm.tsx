import React from "react";
import { getUserFromLocalStorage, saveThreadsToLocalStorage } from "../utils/helpers/localStorage";

interface ThreadFormProps {
    threads: ThreadType[]
    setThreads: React.Dispatch<React.SetStateAction<ThreadType[]>>
}

const ThreadForm = (props: ThreadFormProps) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const user = getUserFromLocalStorage()
        e.preventDefault()
        // get the values from the form
        const title = (e.currentTarget.elements[1] as HTMLInputElement).value
        const description = (e.currentTarget.elements[2] as HTMLInputElement).value
        const category = (e.currentTarget.elements[3] as HTMLInputElement).value as ThreadCategory

        const newThread: Thread | QNAThread = {
            id: props.threads.length + 1,
            title,
            description: description,
            category,
            creator: user,
            creationDate: new Date().toISOString(),
            isAnswered: false,
        }
        const newThreads: ThreadType[] =[
            ...props.threads,
            newThread
        ]
        saveThreadsToLocalStorage(newThreads)
        props.setThreads(newThreads)
        

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset>
                <legend>Create a new thread</legend>
            <input name="Title" placeholder="Title" required/><br></br>
                <textarea
                name="description"
                placeholder="Describe your thread"
                rows={5}
                cols={50}
                required
                /><br></br>
                <select name="category" required>
                    <option value="THREAD">Thread</option>
                    <option value="QNA">Question and Answers</option>
                </select>
                <br></br>
                </fieldset>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default ThreadForm;