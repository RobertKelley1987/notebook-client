import React from "react";

type AuthFormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

const AuthForm = ({ handleSubmit, children: inputs }: AuthFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
