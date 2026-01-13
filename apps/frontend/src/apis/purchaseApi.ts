import { apiGet } from './apis'

export type DateRange = {
  from: string
  to: string
}

export interface PurchaseFrequency {
  range: string
  count: number
}

export const fetchPurchaseFrequency = async (params: DateRange) => {
  return apiGet<PurchaseFrequency[]>({
    endpoint: '/api/purchase-frequency',
    params,
  })
}
