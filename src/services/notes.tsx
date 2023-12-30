import { api } from "./api.tsx";

export const getNotes = async (userId: string) => {
  const { data } = await api.get(`/users/${userId}/notes`);
  return data;
};

export const findNote = async (userId: string, noteId: string) => {
  const { data } = await api.get(`/users/${userId}/notes/${noteId}`);
  return data;
};

export const createNote = async (
  userId: string = "",
  title: string = "",
  content: string = ""
) => {
  if (!userId || (!title && !content)) {
    return;
  }

  const { data } = await api.post(`/users/${userId}/notes`, { title, content });
  return data;
};

export const updateNote = async (
  userId: string = "",
  noteId: string = "",
  title: string = "",
  content: string = ""
) => {
  if (!userId || !noteId || (!title && !content)) {
    return;
  }

  const { data } = await api.put(`/users/${userId}/notes/${noteId}`, {
    title,
    content,
  });
  return data;
};
