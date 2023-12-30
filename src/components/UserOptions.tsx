import React from "react";
import { useContext } from "react";
import { UserIdContext } from "../context/UserId.tsx";
import LoggedIn from "./LoggedIn.tsx";
import NotLoggedIn from "./NotLoggedIn.tsx";

const UserOptions = () => {
  const userId = useContext(UserIdContext)?.userId;
  return userId ? <LoggedIn /> : <NotLoggedIn />;
};

export default UserOptions;
