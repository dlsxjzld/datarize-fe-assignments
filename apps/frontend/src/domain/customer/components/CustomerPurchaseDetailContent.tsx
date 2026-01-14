import { useCustomerPurchases } from '../hooks/useCustomerPurchases'
import { type Customer } from '../hooks/useSelectedCustomer'
import CustomerPurchaseList from './CustomerPurchaseDetailList'

interface CustomerPurchaseContentProps {
  customer: Customer
  dateRange: { from: string; to: string }
}

const CustomerPurchaseContent = ({ customer, dateRange }: CustomerPurchaseContentProps) => {
  const { data: purchases } = useCustomerPurchases({
    customerId: customer.id,
    from: dateRange.from,
    to: dateRange.to,
  })

  return <CustomerPurchaseList purchases={purchases} />
}

export default CustomerPurchaseContent
