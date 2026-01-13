import { useState } from 'react'
import styled from '@emotion/styled'
import { PurchaseFrequencySection } from '../domain/purchaseFrequency/components/PurchaseFrequencySection'
import PurchaseFrequencyCSVDownloadSection from '../domain/purchaseFrequency/components/PurchaseFrequencyCSVDownloadSection'

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
