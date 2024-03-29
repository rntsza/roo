import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import JoditEditorComponent from "@/components/text-editor/page";
import jsonToHtml from "@/lib/jsonToHtml";

import { Session } from "next-auth";
import { getUserModels } from "./actions";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";


export default async function Page() {

  const models = await getUserModels();
  console.log(models);
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Modelos iniciais</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <Button variant="outline" size="sm">
            <PlusIcon className="w-4 h-4 mr-3" />
            Adicionar Modelo Inicial
          </Button>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <JoditEditorComponent content={jsonToHtml("data")} />
      </DashboardPageMain>
    </DashboardPage>
  );
}
