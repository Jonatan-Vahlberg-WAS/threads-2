
const THREADS_STORAGE_KEY = '@LS_THREADS';
const USER_STORAGE_KEY = '@LS_USER';
const COMMENTS_STORAGE_KEY = '@LS_COMMENTS';

type StorageKey = typeof THREADS_STORAGE_KEY | typeof USER_STORAGE_KEY | typeof COMMENTS_STORAGE_KEY;

const getFromLocalStorage = (key: StorageKey) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

const saveToLocalStorage = (key: StorageKey, data: any) => {
    const stringifiedData = JSON.stringify(data);

    localStorage.setItem(key, stringifiedData);
}

export const getThreadsFromLocalStorage = (): ThreadType[] => {
    return getFromLocalStorage(THREADS_STORAGE_KEY) || [];
}

export const saveThreadsToLocalStorage = (threads: ThreadType[]) => {
    saveToLocalStorage(THREADS_STORAGE_KEY, threads);
}

export const getUserFromLocalStorage = (): User => {
    return getFromLocalStorage(USER_STORAGE_KEY) || {
        id: -1,
	    name: "John Doe",
	    userName: "anonymous"
    }
}

export const saveUserToLocalStorage = (user: User) => {
    saveToLocalStorage(USER_STORAGE_KEY, user);
}

export const getCommentsFromLocalStorage = (): ThreadComment[] => {
    return getFromLocalStorage(COMMENTS_STORAGE_KEY) || [];
}

export const saveCommentsToLocalStorage = (comments: ThreadComment[]) => {
    saveToLocalStorage(COMMENTS_STORAGE_KEY, comments);
}

export const removeFromLocalStorage = (key: StorageKey) => {
    localStorage.removeItem(key);
}

export const clearLocalStorage = () => {
    localStorage.clear();
}