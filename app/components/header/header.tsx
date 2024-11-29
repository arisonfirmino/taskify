"use client";

import { useSession } from "next-auth/react";
import SignInGitHub from "@/app/components/header/auth/signin-github";
import SignInGoogle from "@/app/components/header/auth/signin-google";
import Title from "@/app/components/header/title";
import UserInfo from "@/app/components/header/user-info";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="fixed left-0 top-0 flex w-full flex-col items-center justify-between gap-5 border-b border-solid border-gray-400 bg-gray-100 p-5 md:flex-row">
      <Title />

      {session?.user ? (
        <UserInfo
          name={session.user.name ?? ""}
          email={session.user.email ?? ""}
          image={session.user.image ?? ""}
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <SignInGoogle />
          <SignInGitHub />
        </div>
      )}
    </header>
  );
};

export default Header;
