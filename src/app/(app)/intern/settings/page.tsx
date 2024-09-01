import { PageModel, PageModelHeader, PageModelHeaderTitle, PageModelMain } from "@/components/dashboard/pageModel";

const SettingsPage = () => {
    return (
      <PageModel className="">
        <PageModelHeader>
            <PageModelHeaderTitle>Settings</PageModelHeaderTitle>
        </PageModelHeader>
        <PageModelMain className="flex items-center justify-center">
            <h1>Settings Content</h1>
        </PageModelMain>
      </PageModel>
    )
  }
  
  export default SettingsPage;
