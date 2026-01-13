import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPurchases, type DateRange } from '../apis/purchaseApi'

export const usePurchases = ({ from, to }: DateRange) => {
  return useSuspenseQuery({
    queryKey: ['purchases', from, to],
    queryFn: () => fetchPurchases({ from, to }),
    staleTime: 10 * 60 * 1000,
  })
}
