import styled from '@emotion/styled'
import { CSVLink } from 'react-csv'
import { usePurchases } from '../hooks/usePurchases'

interface PurchaseFrequencyCSVDownloadProps {
  from: string
  to: string
}

const PurchaseFrequencyCSVDownload = ({ from, to }: PurchaseFrequencyCSVDownloadProps) => {
  const { data } = usePurchases({ from, to })

  const csvData = data.map((purchase) => ({
    날짜: purchase.date,
    고객명: purchase.customerName,
    제품명: purchase.productName,
    가격: purchase.price,
    수량: purchase.quantity,
  }))

  return (
    <StyledCSVLink data={csvData} filename={`구매 데이터-${from}-${to}.csv`}>
      CSV 다운로드
    </StyledCSVLink>
  )
}

export default PurchaseFrequencyCSVDownload

const StyledCSVLink = styled(CSVLink)`
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`
