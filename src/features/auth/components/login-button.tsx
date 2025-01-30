"use client";

import { loginWithGithub } from "@/features/auth/actions/login";

export const LoginButton = () => {
  return (
    <button
      onClick={loginWithGithub}
      className="bg-blue-500 text-white p-2 rounded-md block"
    >
      Githubでログイン
    </button>
  );
};
