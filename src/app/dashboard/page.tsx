import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { LogoutButton } from "@/features/auth/components/logout-button";

const DashboardPage = async () => {
  /**
   * ログインしていない場合はホームページにリダイレクト
   */
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>ダッシュボード</h1>
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
