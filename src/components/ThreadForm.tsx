import React from "react";
import { useThreads } from "../utils/contexts/ThreadContext";
import { useUser } from "../utils/contexts/UserContext";

const ThreadForm = () => {

    const user = useUser()
    const threads = useThreads()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // get the values from the form
        const title = (e.currentTarget.elements[1] as HTMLInputElement).value
        const description = (e.currentTarget.elements[2] as HTMLInputElement).value
        const category = (e.currentTarget.elements[3] as HTMLInputElement).value as ThreadCategory

        const newThread: ThreadType = {
            id: threads.threads.length + 1,
            title,
            description: description,
            category,
            creator: user.user,
            creationDate: new Date().toISOString(),
            isAnswered: false,
        }
        threads.actions.createThread(newThread)
        

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