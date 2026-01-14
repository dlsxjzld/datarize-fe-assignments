import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '../apis/customerApi'

interface UseCustomerPurchasesParams {
  customerId: number
  from?: string
  to?: string
}

export const useCustomerPurchases = ({ customerId, from, to }: UseCustomerPurchasesParams) => {
  return useSuspenseQuery({
    queryKey: ['customerPurchases', customerId, from, to],
    queryFn: () => fetchCustomerPurchases({ customerId, from, to }),
  })
}
