import styled from '@emotion/styled'

interface Customer {
  id: number
  name: string
  count: number
  totalAmount: number
}

interface CustomerListProps {
  customers: Customer[]
  isFetching: boolean
  onCustomerSelect: (customerId: number) => void
}

const CustomerList = ({ customers, isFetching, onCustomerSelect }: CustomerListProps) => {
  return (
    <Container $isFetching={isFetching}>
      <Table>
        <Thead>
          <tr>
            <Th>ID</Th>
            <Th>이름</Th>
            <Th>구매 횟수</Th>
            <Th>총 구매 금액</Th>
          </tr>
        </Thead>
        <tbody>
          {customers.map((customer) => (
            <Tr key={customer.id} onClick={() => onCustomerSelect(customer.id)} $isFetching={isFetching}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.count.toLocaleString()}회</Td>
              <Td>{customer.totalAmount.toLocaleString()}원</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default CustomerList

const Container = styled.div<{ $isFetching: boolean }>`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.$isFetching ? 0.6 : 1)};
`

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const Thead = styled.thead`
  background-color: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
`

export const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
`

export const Tr = styled.tr<{ $isFetching: boolean }>`
  border-bottom: 1px solid #e5e7eb;
  cursor: ${(props) => (props.$isFetching ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-of-type {
    border-bottom: none;
  }
`

export const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #1f2937;
`
