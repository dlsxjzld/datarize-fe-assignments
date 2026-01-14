import styled from '@emotion/styled'
import DateRangePicker from '../domain/purchaseFrequency/components/DateRangePicker'
import { PurchaseFrequencySection } from '../domain/purchaseFrequency/components/PurchaseFrequencySection'
import PurchaseFrequencyCSVDownloadSection from '../domain/purchaseFrequency/components/PurchaseFrequencyCSVDownloadSection'
import { useDateRange } from '../domain/purchaseFrequency/hooks/useDateRange'

const DashBoard = () => {
  const { dateRange, updateFrom, updateTo } = useDateRange('2025-10-01', '2025-12-31')

  const handleFromChange = (value: string) => {
    updateFrom(value)
  }

  const handleToChange = (value: string) => {
    updateTo(value)
  }

  return (
    <main>
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
    </main>
  )
}

export default DashBoard

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e5e7eb;

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
