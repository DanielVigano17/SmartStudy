import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "../services/auth";
import { Button } from "@/components/ui/button";
import ButtonSignOut from "./_components/ButtonSignOut";

export default async function Home()
{
    const session =  await auth();

    return (
        <main className="flex container flex-col">
            <header className="flex justify-between p-2">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <span>{session?.user?.email}</span>
                </div>
                <ButtonSignOut/>
            </header>
        </main>
    )
}