import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../context/UserId.tsx";
import AuthForm from "./AuthForm.tsx";
import { UserIdPromise } from "../types.tsx";

type AuthPageProps = {
  authFn: (
    username: string | undefined,
    password: string | undefined
  ) => UserIdPromise;
};

const AuthPage = ({ authFn }: AuthPageProps) => {
  const navigate = useNavigate();
  const setUserId = useContext(UserIdContext)?.setUserId;
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const { userId } = await authFn(username, password);
    setUserId && setUserId(userId);
    navigate("/");
  };

  return (
    <AuthForm handleSubmit={handleSubmit}>
      <input ref={usernameRef} type="text" />
      <input ref={passwordRef} type="password" />
    </AuthForm>
  );
};

export default AuthPage;
