import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "../../../services/auth";
import ButtonSignOut from "./_components/ButtonSignOut";
import { PageModel, PageModelHeader, PageModelHeaderTitle, PageModelMain } from "@/components/dashboard/pageModel";

export default async function Home()
{
    const session =  await auth();

    return (
        <PageModel className="h-screen">
            <PageModelHeader>
                <PageModelHeaderTitle>Home</PageModelHeaderTitle>
            </PageModelHeader>
            <PageModelMain className="flex items-center justify-center">
                <h1>Home Teste</h1>
            </PageModelMain>
        </PageModel>
    )
}