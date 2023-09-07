type ThreadCategory = "THREAD" | "QNA"

interface Thread {
    id: number;
	title: string;
	category: "THREAD";
	creationDate: string;
	description: string;
	creator: User
}

interface QNAThread extends Thread {
	category: "QNA";
	isAnswered: boolean;
	commentAnswerId?: number
}

type ThreadType = Thread | QNAThread

interface ThreadComment {
	id: number; //(tillagt)
	thread: number;
	content: string;
	creator: User
}