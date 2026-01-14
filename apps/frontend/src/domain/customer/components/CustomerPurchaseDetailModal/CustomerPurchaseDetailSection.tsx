import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styled from '@emotion/styled'
import Spinner from '@/common/components/Spinner'
import { ErrorFallback } from '@/common/components/ErrorFallback'
import { type Customer } from '../../hooks/useSelectedCustomer'
import CustomerPurchaseContent from '../CustomerPurchaseDetailContent'

interface CustomerPurchaseDetailSectionProps {
  customer: Customer
  dateRange: { from: string; to: string }
  reset: () => void
}

const CustomerPurchaseDetailSection = ({ customer, dateRange, reset }: CustomerPurchaseDetailSectionProps) => {
  return (
    <Content>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense
          fallback={
            <LoadingContainer>
              <Spinner />
              <LoadingText>구매 내역을 불러오는 중...</LoadingText>
            </LoadingContainer>
          }
        >
          <CustomerPurchaseContent customer={customer} dateRange={dateRange} />
        </Suspense>
      </ErrorBoundary>
    </Content>
  )
}

export default CustomerPurchaseDetailSection

const Content = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 16px;
`

const LoadingText = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`
