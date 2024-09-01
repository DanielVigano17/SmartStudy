import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "../../../services/auth";
import ButtonSignOut from "./_components/ButtonSignOut";
import { PageModel, PageModelHeader, PageModelHeaderTitle, PageModelMain } from "@/components/dashboard/pageModel";
import { DataTableDemo } from "./_components/data-table-home";
import { FormCreateMateriaDialog } from "./_components/form-dialog";

export default async function Home()
{
    const session =  await auth();

    return (
        <PageModel className="h-screen">
            <PageModelHeader>
                <PageModelHeaderTitle>Home</PageModelHeaderTitle>
                <FormCreateMateriaDialog/>
            </PageModelHeader>
            <PageModelMain>
                <DataTableDemo/>
            </PageModelMain>
        </PageModel>
    )
}