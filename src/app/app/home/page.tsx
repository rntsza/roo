import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
// Pagina padrão

export default async function Page() {
  // return <pre>{JSON.stringify(session?.user, null, 1)}</pre>
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Início</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Início</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}
