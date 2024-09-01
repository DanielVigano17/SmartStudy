import { auth } from "@/app/services/auth";
import { MainSidebar } from "./_components/main-sidebar";

export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session = await auth()
    return (
        <div className="grid grid-cols-[15.2rem_1fr]">
            <MainSidebar user={session?.user} />
            <main>{children}</main>
        </div>
    );
  }