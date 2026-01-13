import { PurchaseFrequencySection } from '@/components/PurchaseFrequency/PurchaseFrequencySection'
import { useState } from 'react'

const DashBoard = () => {
  const [dateRange, setDateRange] = useState({
    from: '2025-10-01',
    to: '2025-12-31',
  })

  return (
    <main>
      <h1>쇼핑몰 구매 데이터 대시보드</h1>
      <p>
        기간: {dateRange.from} ~ {dateRange.to}
      </p>
      <PurchaseFrequencySection from={dateRange.from} to={dateRange.to} />
    </main>
  )
}

export default DashBoard
