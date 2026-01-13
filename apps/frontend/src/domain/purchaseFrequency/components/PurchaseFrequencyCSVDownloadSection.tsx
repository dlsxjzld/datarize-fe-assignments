import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import styled from '@emotion/styled'
import { ErrorFallback } from '@/common/components/ErrorFallback'
import PurchaseFrequencyCSVDownload from './PurchaseFrequencyCSVDownload'
import type { DateRange } from '../apis/purchaseApi'

const PurchaseFrequencyCSVDownloadSection = ({ from, to }: DateRange) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Suspense fallback={<Placeholder>로딩 중...</Placeholder>}>
        <PurchaseFrequencyCSVDownload from={from} to={to} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PurchaseFrequencyCSVDownloadSection

const Placeholder = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #6b7280;
`
