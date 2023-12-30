import React from "react";

type AuthFormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

const AuthForm = ({ handleSubmit, children: inputs }: AuthFormProps) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {inputs}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
