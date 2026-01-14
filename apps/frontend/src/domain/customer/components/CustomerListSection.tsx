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
import { useMemo } from 'react'
import { Customer } from '../hooks/useSelectedCustomer'

interface CustomerListSectionProps {
  dateRange: { from: string; to: string }
  onCustomerSelect: (customer: Customer) => void
}

const CustomerListSection = ({ dateRange, onCustomerSelect }: CustomerListSectionProps) => {
  const { reset } = useQueryErrorResetBoundary()

  const { sortBy, sortDirection, toggleSort } = useSort()
  const { searchName, debouncedSearchName, updateSearch } = useSearch('')
  const { page, limit, changePage, resetPage } = usePagination(1, 20)

  const {
    data: customersData,
    isFetching,
    isLoading,
  } = useCustomers({
    sortBy: sortDirection,
    name: debouncedSearchName,
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

  const customers = useMemo(() => customersData?.customers ?? [], [customersData])
  const sortedCustomers = useMemo(() => {
    const sorted = [...customers]
    if (sortBy === 'id-asc') {
      sorted.sort((a, b) => a.id - b.id)
    }

    return sorted
  }, [customers, sortBy])

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
            {sortedCustomers.length === 0 ? (
              <EmptyMessage>
                {debouncedSearchName.length > 0 ? '검색 결과가 없습니다.' : '등록된 고객이 없습니다.'}
              </EmptyMessage>
            ) : (
              <CustomerList customers={sortedCustomers} isFetching={isFetching} onCustomerSelect={onCustomerSelect} />
            )}
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

export default CustomerListSection

const LoadingMessage = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
`

const EmptyMessage = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
`
