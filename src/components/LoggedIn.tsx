import React from "react";
import { useContext } from "react";
import { UserIdContext } from "../context/UserId.tsx";
import { signOut } from "../services/users.tsx";

const LoggedIn = () => {
  const setUserId = useContext(UserIdContext)?.setUserId;

  const handleClick = async () => {
    const { userId } = await signOut();
    if (setUserId) {
      setUserId(userId);
    }
  };

  return <button onClick={handleClick}>Sign Out</button>;
};

export default LoggedIn;
