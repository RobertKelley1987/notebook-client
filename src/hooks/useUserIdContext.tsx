import { useContext } from "react";
import { UserIdContext } from "../context/UserId.tsx";

const useUserIdContext = () => {
  const userIdContext = useContext(UserIdContext);

  if (!userIdContext) {
    throw new Error(
      "UserIdContext must be used in a component wrapped by a UserIdContext provider."
    );
  }

  return userIdContext;
};

export default useUserIdContext;
