import { useParams } from "react-router-dom";
import ThreadDetail from "../components/ThreadDetail";
import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import { useThreads } from "../utils/contexts/ThreadContext";
import { CommentProvider } from "../utils/contexts/CommentContext";

const DetailPage = () => {
  const { id } = useParams();
  const threads = useThreads()
  const [thread, setThread] = useState<ThreadType | null>(null);

  useEffect(() => {
    console.log(threads.actions.getThread(Number(id)))
    setThread(threads.actions.getThread(Number(id)))
  }, [id, threads.threads]);

  return (
    <div>
      <ThreadDetail thread={thread} />
      <CommentProvider threadId={Number(id)}>
        <CommentList threadId={Number(id)} />
      </CommentProvider>
    </div>
  );
};

export default DetailPage;
