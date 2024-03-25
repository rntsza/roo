import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
  } from '@/components/dashboard/page'
import JoditEditorComponent from '@/components/text-editor/page'
import jsonToHtml from '@/lib/jsonToHtml'

import data from '../../../components/text-editor/mock.json'

  export default async function Page() {
    
    // return <pre>{JSON.stringify(session?.user, null, 1)}</pre>
    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Modelos iniciais</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>
          <h1>Modelos iniciais</h1>
          <JoditEditorComponent content={jsonToHtml(data)} />
          
        </DashboardPageMain>
      </DashboardPage>
    )
  }
  