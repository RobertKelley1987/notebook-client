import { createContext } from "react";

type ContextType = {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
};

export const UserIdContext = createContext<ContextType | null>(null);
