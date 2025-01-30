"use client";

import { logout } from "@/features/auth/actions/logout";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="bg-red-500 text-white p-2 rounded-md block"
    >
      Logout
    </button>
  );
};
