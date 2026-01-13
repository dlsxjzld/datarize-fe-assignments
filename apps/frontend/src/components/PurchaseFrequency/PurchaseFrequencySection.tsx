import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorFallback } from '../common/ErrorFallback'
import PurchaseFrequencyTable from './PurchaseFrequencyTable'
import PurchaseFrequencySkeleton from './PurchaseFrequencySkeleton'
import type { DateRange } from '../../apis/purchaseApi'

export const PurchaseFrequencySection = ({ from, to }: DateRange) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Suspense fallback={<PurchaseFrequencySkeleton />}>
        <PurchaseFrequencyTable from={from} to={to} />
      </Suspense>
    </ErrorBoundary>
  )
}
