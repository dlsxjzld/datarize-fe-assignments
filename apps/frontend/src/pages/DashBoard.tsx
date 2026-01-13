import { ErrorFallback } from '@/components/common/ErrorFallback'
import PurchaseFrequencyTable from '@/components/PurchaseFrequency/PurchaseFrequencyTable'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const DashBoard = () => {
  const [dateRange, setDateRange] = useState({
    from: '2025-10-01',
    to: '2025-12-31',
  })

  const { reset } = useQueryErrorResetBoundary()

  return (
    <main>
      <h1>쇼핑몰 구매 데이터 대시보드</h1>
      <p>
        기간: {dateRange.from} ~ {dateRange.to}
      </p>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <PurchaseFrequencyTable from={dateRange.from} to={dateRange.to} />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

export default DashBoard
