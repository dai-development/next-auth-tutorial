import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { LoginButton } from "@/features/auth/components/login-button";

export default async function Home() {
  /**
   * ログインしている場合はダッシュボードにリダイレクト
   */
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>ホームページ</h1>
      <LoginButton />
    </div>
  );
}
