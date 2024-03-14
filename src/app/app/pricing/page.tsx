import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import PricingPage from '../_components/pricing'

export default async function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Planos</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <PricingPage />
      </DashboardPageMain>
    </DashboardPage>
  )
}
