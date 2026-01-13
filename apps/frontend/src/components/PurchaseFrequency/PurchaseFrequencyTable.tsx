import styled from '@emotion/styled'
import { usePurchaseFrequency } from '../../hooks/usePurchaseFrequency'
import { formatPriceRange } from '../../utils/formatPriceRange'

interface PurchaseFrequencyTableProps {
  from: string
  to: string
}

const PurchaseFrequencyTable = ({ from, to }: PurchaseFrequencyTableProps) => {
  const { data } = usePurchaseFrequency({ from, to })

  return (
    <Container>
      <Title>가격대별 구매 빈도</Title>
      <Table>
        <Thead>
          <tr>
            <Th>가격대</Th>
            <Th>구매 횟수</Th>
          </tr>
        </Thead>
        <tbody>
          {data.map((item) => (
            <Tr key={`${item.range.start}-${item.range.end}`}>
              <Td>{formatPriceRange(item.range)}</Td>
              <Td>{item.count.toLocaleString()}건</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default PurchaseFrequencyTable

export const Container = styled.section`
  margin: 32px 0;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a202c;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const Thead = styled.thead`
  background-color: #f7fafc;
`

export const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  border-bottom: 2px solid #e2e8f0;
`

export const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #2d3748;
  border-bottom: 1px solid #e2e8f0;
`

const Tr = styled.tr`
  &:last-child td {
    border-bottom: none;
  }

  &:hover {
    background-color: #f7fafc;
  }
`
