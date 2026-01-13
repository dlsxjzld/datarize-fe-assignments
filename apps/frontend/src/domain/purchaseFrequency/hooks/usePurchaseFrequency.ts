import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency, type DateRange } from '../apis/purchaseApi'

export const usePurchaseFrequency = ({ from, to }: DateRange) => {
  return useSuspenseQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency({ from, to }),
    staleTime: 10 * 60 * 1000,
  })
}
