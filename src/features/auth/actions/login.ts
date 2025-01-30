"use server";

import { signIn } from "@/auth";

export const loginWithGithub = async () => {
  await signIn("github");
};
