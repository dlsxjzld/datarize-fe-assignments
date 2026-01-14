import styled from '@emotion/styled'

interface Purchase {
  date: string
  product: string
  price: number
  quantity: number
  imgSrc: string
}

interface CustomerPurchaseListProps {
  purchases: Purchase[]
}

const PurchaseItem = ({ purchase }: { purchase: Purchase }) => {
  const details = [
    { label: '구매 날짜', value: purchase.date },
    { label: '가격', value: `${purchase.price.toLocaleString()}원` },
    { label: '수량', value: `${purchase.quantity}개` },
    { label: '합계', value: `${(purchase.price * purchase.quantity).toLocaleString()}원`, isBold: true },
  ]

  return (
    <Item>
      <Thumbnail src={purchase.imgSrc} alt={purchase.product} />
      <PurchaseInfo>
        <ProductName>{purchase.product}</ProductName>
        <PurchaseDetails>
          {details.map((detail) => (
            <DetailRow key={detail.label}>
              <Label>{detail.label}:</Label>
              <Value $isBold={detail.isBold}>{detail.value}</Value>
            </DetailRow>
          ))}
        </PurchaseDetails>
      </PurchaseInfo>
    </Item>
  )
}

const CustomerPurchaseList = ({ purchases }: CustomerPurchaseListProps) => {
  if (purchases.length === 0) {
    return <EmptyMessage>구매 내역이 없습니다.</EmptyMessage>
  }

  return (
    <List>
      {purchases.map((purchase) => (
        <PurchaseItem key={`${purchase.date}-${purchase.product}`} purchase={purchase} />
      ))}
    </List>
  )
}

export default CustomerPurchaseList

const EmptyMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 14px;
  color: #6b7280;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Item = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`

const PurchaseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`

const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`

const Label = styled.span`
  color: #6b7280;
  min-width: 80px;
`

const Value = styled.span<{ $isBold?: boolean }>`
  color: #1f2937;
  font-weight: ${(props) => (props.$isBold ? 600 : 400)};
`
