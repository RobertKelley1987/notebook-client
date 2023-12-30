import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUserIdContext from "../hooks/useUserIdContext.tsx";
import AuthForm from "./AuthForm.tsx";
import { UserIdPromise } from "../types.tsx";

type AuthPageProps = {
  heading: string;
  authFn: (
    username: string | undefined,
    password: string | undefined
  ) => UserIdPromise;
};

const AuthPage = ({ heading, authFn }: AuthPageProps) => {
  const { setUserId } = useUserIdContext();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const { userId } = await authFn(username, password);
    setUserId(userId);
    navigate("/");
  };

  return (
    <div className="flex h-full grow basis-full justify-center items-center">
      <div className="flex flex-col w-96">
        <h1 className="font-sans font-bold text-4xl">{heading}</h1>
        <AuthForm handleSubmit={handleSubmit}>
          <input
            className="border border-black"
            ref={usernameRef}
            type="text"
          />
          <input
            className="border border-black"
            ref={passwordRef}
            type="password"
          />
        </AuthForm>
      </div>
    </div>
  );
};

export default AuthPage;
