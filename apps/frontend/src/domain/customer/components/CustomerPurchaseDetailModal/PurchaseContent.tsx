import { useCustomerPurchases } from '../../hooks/useCustomerPurchases'
import { Customer } from '../../hooks/useSelectedCustomer'
import CustomerPurchaseList from './CustomerPurchaseList'

interface PurchaseContentProps {
  customer: Customer
  dateRange: { from: string; to: string }
}

const PurchaseContent = ({ customer, dateRange }: PurchaseContentProps) => {
  const { data: purchases } = useCustomerPurchases({
    customerId: customer.id,
    from: dateRange.from,
    to: dateRange.to,
  })

  return <CustomerPurchaseList purchases={purchases || []} />
}

export default PurchaseContent
