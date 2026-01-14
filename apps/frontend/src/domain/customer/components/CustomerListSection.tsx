import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import styled from '@emotion/styled'
import CustomerList from './CustomerList'
import CustomerListControls from './CustomerListControls'
import Pagination from './Pagination'
import { useSort } from '../hooks/useSort'
import { useSearch } from '../hooks/useSearch'
import { usePagination } from '../hooks/usePagination'
import { useCustomers } from '../hooks/useCustomers'
import { ErrorFallback } from '@/common/components/ErrorFallback'

interface CustomerListSectionProps {
  dateRange: { from: string; to: string }
  onCustomerSelect: (customerId: number) => void
}

export const CustomerListSection = ({ dateRange, onCustomerSelect }: CustomerListSectionProps) => {
  const { reset } = useQueryErrorResetBoundary()

  const { sortBy, sortDirection, toggleSort } = useSort()
  const { searchName, updateSearch } = useSearch('')
  const { page, limit, changePage, resetPage } = usePagination(1, 20)

  const {
    data: customersData,
    isFetching,
    isLoading,
  } = useCustomers({
    sortBy: sortDirection,
    name: searchName,
    page,
    limit,
    from: dateRange.from,
    to: dateRange.to,
  })

  const handleSortToggle = () => {
    toggleSort()
    resetPage()
  }

  const handleSearchChange = (value: string) => {
    updateSearch(value)
    resetPage()
  }

  const getSortLabel = () => {
    if (sortBy === 'id-asc') {
      return 'ID 오름차순'
    }
    if (sortBy === 'totalAmount-desc') {
      return '총 구매 금액 ↓ 내림차순'
    }
    if (sortBy === 'totalAmount-asc') {
      return '총 구매 금액 ↑ 오름차순'
    }
    return 'ID 오름차순'
  }

  const customers = customersData?.customers ?? []
  const sortedCustomers = [...customers]
  if (sortBy === 'id-asc') {
    sortedCustomers.sort((a, b) => a.id - b.id)
  }

  return (
    <>
      <CustomerListControls
        sortLabel={getSortLabel()}
        searchName={searchName}
        onSortToggle={handleSortToggle}
        onSearchChange={handleSearchChange}
      />
      {isLoading ? (
        <LoadingMessage>고객 목록을 불러오는 중...</LoadingMessage>
      ) : (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <CustomerList customers={sortedCustomers} isFetching={isFetching} onCustomerSelect={onCustomerSelect} />
          </ErrorBoundary>
          <Pagination
            currentPage={page}
            totalPages={customersData?.pagination.totalPages ?? 1}
            total={customersData?.pagination.total ?? 0}
            displayCount={sortedCustomers.length}
            onPageChange={changePage}
          />
        </>
      )}
    </>
  )
}

const LoadingMessage = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
`
