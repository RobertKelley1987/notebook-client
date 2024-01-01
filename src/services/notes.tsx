import { api } from "./api.tsx";

export const getNotes = async () => {
  const { data } = await api.get(`/notes`);
  return data;
};

export const findNote = async (noteId: string) => {
  const { data } = await api.get(`/notes/${noteId}`);
  return data;
};

export const createNote = async (title: string = "", content: string = "") => {
  if (!title && !content) {
    return;
  }

  const { data } = await api.post(`/notes`, { title, content });
  return data;
};

export const updateNote = async (
  noteId: string = "",
  title: string = "",
  content: string = ""
) => {
  if (!noteId || (!title && !content)) {
    return;
  }

  const { data } = await api.put(`/notes/${noteId}`, {
    title,
    content,
  });
  return data;
};

export const deleteNote = async (noteId: string) => {
  const { data } = await api.delete(`/notes/${noteId}`);
  return data;
};
