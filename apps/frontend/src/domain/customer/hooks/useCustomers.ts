import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { fetchCustomers, FetchCustomersParams } from '../apis/customerApi'

export const useCustomers = (params: FetchCustomersParams) => {
  return useQuery({
    queryKey: ['customers', ...Object.values(params)],
    queryFn: () => fetchCustomers(params),
    staleTime: 1000 * 60 * 10,
    placeholderData: keepPreviousData,
  })
}
