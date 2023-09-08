import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css';
import Toolbar from "./Toolbar";
/* 
Without types for draft-js, we get the following error:
Could not find a declaration file for module 
. /Users/jonatanvahlberg/Documents/courses/FE22 - KYHS/Typescript/lektion-6/node_modules/draft-js/lib/Draft.js implicitly has an 
type. 
 
 */

const RTE = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )
    return (
        <div
        style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      >
            <h1>Rich Text Editor</h1>
            <Toolbar
                editorState={editorState}
                setEditorState={setEditorState}
            />
            <Editor
                editorState={editorState}
                onChange={setEditorState}
            />
        </div>
    )
};

export default RTE;