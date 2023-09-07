import { useParams } from "react-router-dom";
import ThreadDetail from "../components/ThreadDetail";
import { useEffect, useState } from "react";
import { getThreadsFromLocalStorage } from "../utils/helpers/localStorage";
import CommentList from "../components/CommentList";

const DetailPage = () => {
  const { id } = useParams();

  console.log("params", useParams());

  const [thread, setThread] = useState<ThreadType | null>(null);

  useEffect(() => {
    const threads = getThreadsFromLocalStorage();
    if (threads) {
      const thread = threads.find((thread) => thread.id === Number(id));
      setThread(thread || null);
    }
  }, [id]);

  return (
    <div>
      <ThreadDetail thread={thread} />
      <CommentList threadId={Number(id)} />
    </div>
  );
};

export default DetailPage;
