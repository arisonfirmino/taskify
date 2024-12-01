"use client";

import { SignInResponse } from "next-auth/react";

interface SignInButtonProps {
  children: React.ReactNode;
  handleClick: () => Promise<SignInResponse | undefined>;
}

const SignInButton = ({ children, handleClick }: SignInButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2.5 text-nowrap rounded-lg border border-solid border-gray-400 p-2.5 text-gray-600 hover:border-blue-500 hover:text-blue-500"
    >
      {children}
    </button>
  );
};

export default SignInButton;
