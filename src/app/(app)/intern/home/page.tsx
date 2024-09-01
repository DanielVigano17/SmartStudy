import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "../../../services/auth";
import ButtonSignOut from "./_components/ButtonSignOut";

export default async function Home()
{
    const session =  await auth();

    return (
        <div className="flex h-screen container flex-col">
            <h1>Teste 2</h1>
        </div>
    )
}