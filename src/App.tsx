import { MarketingShell } from '@/components/layout/marketing-shell'
import { HomePage } from '@/pages/home-page'
import { PricingPage } from '@/pages/pricing-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <MarketingShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </MarketingShell>
    </BrowserRouter>
  )
}
