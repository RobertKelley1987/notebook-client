import { api } from "./api.tsx";
import { UserIdPromise } from "../types.tsx";

export const signUp = async (
  username: string = "",
  password: string = ""
): UserIdPromise => {
  const { data } = await api.post("/signup", { username, password });
  return data;
};

export const signIn = async (
  username: string = "",
  password: string = ""
): UserIdPromise => {
  const { data } = await api.post("/signin", { username, password });
  return data;
};

export const signOut = async () => {
  const { data } = await api.post("/signout");
  return data;
};

export const getSession = async () => {
  const { data } = await api.get("/sessions");
  return data;
};
