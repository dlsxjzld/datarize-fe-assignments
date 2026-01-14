import { useCallback } from 'react'
import styled from '@emotion/styled'
import { useModal } from '@/common/hooks/useModal'
import DateRangePicker from '../domain/purchaseFrequency/components/DateRangePicker'
import { PurchaseFrequencySection } from '../domain/purchaseFrequency/components/PurchaseFrequencySection'
import PurchaseFrequencyCSVDownloadSection from '../domain/purchaseFrequency/components/PurchaseFrequencyCSVDownloadSection'
import { useDateRange } from '../domain/purchaseFrequency/hooks/useDateRange'
import CustomerListSection from '../domain/customer/components/CustomerListSection'
import CustomerPurchaseDetailModal from '../domain/customer/components/CustomerPurchaseDetailModal'
import { type Customer, useSelectedCustomer } from '../domain/customer/hooks/useSelectedCustomer'

const DashBoard = () => {
  const { dateRange, updateFrom, updateTo } = useDateRange('2025-10-01', '2025-12-31')
  const { isOpen, open, close } = useModal()
  const { selectedCustomer, selectCustomer, clearCustomer } = useSelectedCustomer()

  const handleFromChange = (value: string) => {
    updateFrom(value)
  }

  const handleToChange = (value: string) => {
    updateTo(value)
  }

  const handleCustomerSelect = useCallback(
    (customer: Customer) => {
      selectCustomer(customer)
      open()
    },
    [selectCustomer, open],
  )

  const handleCloseModal = useCallback(() => {
    close()
    clearCustomer()
  }, [close, clearCustomer])

  return (
    <main>
      <Layout>
        <Header>
          <h1>쇼핑몰 구매 데이터 대시보드</h1>
          <DateRangePicker
            from={dateRange.from}
            to={dateRange.to}
            onFromChange={handleFromChange}
            onToChange={handleToChange}
          />
        </Header>

        <Container>
          <SectionHeader>
            <Title>가격대별 구매 빈도</Title>
            <PurchaseFrequencyCSVDownloadSection from={dateRange.from} to={dateRange.to} />
          </SectionHeader>
          <PurchaseFrequencySection from={dateRange.from} to={dateRange.to} />
        </Container>

        <Container>
          <Title>고객 목록</Title>
          <CustomerListSection dateRange={dateRange} onCustomerSelect={handleCustomerSelect} />
        </Container>

        <CustomerPurchaseDetailModal
          isOpen={isOpen}
          customer={selectedCustomer}
          dateRange={dateRange}
          onClose={handleCloseModal}
        />
      </Layout>
    </main>
  )
}

export default DashBoard

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0 48px;
  box-sizing: border-box;
`

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
  border-bottom: 2px solid #e5e7eb;
  box-sizing: border-box;
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }
`

const Container = styled.section`
  margin: 32px 0;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
`
