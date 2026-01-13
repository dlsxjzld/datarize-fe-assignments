import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorFallback } from '@/common/components/ErrorFallback'
import PurchaseFrequencyCSVDownload from './PurchaseFrequencyCSVDownload'
import PurchaseFrequencyCSVDownloadSkeleton from './PurchaseFrequencyCSVDownloadSkeleton'
import type { DateRange } from '../apis/purchaseApi'

const PurchaseFrequencyCSVDownloadSection = ({ from, to }: DateRange) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Suspense fallback={<PurchaseFrequencyCSVDownloadSkeleton />}>
        <PurchaseFrequencyCSVDownload from={from} to={to} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PurchaseFrequencyCSVDownloadSection
