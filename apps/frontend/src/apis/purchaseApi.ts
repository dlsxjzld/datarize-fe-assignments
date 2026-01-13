import { apiGet } from './apis'

export type DateRange = {
  from: string
  to: string
}

interface PurchaseFrequencyServer {
  range: string
  count: number
}

export interface PurchaseFrequencyClient {
  range: {
    start: number
    end: number | null
  }
  count: number
}

const parseRange = (rangeStr: string): PurchaseFrequencyClient['range'] => {
  const [min, max] = rangeStr.split(' - ')
  const start = Number(min)
  const end = max === 'Infinity' ? null : Number(max)

  return { start, end }
}

const normalizePurchaseFrequency = (data: PurchaseFrequencyServer[]): PurchaseFrequencyClient[] => {
  return data.map((item) => ({
    range: parseRange(item.range),
    count: item.count,
  }))
}

export const fetchPurchaseFrequency = async (params: DateRange): Promise<PurchaseFrequencyClient[]> => {
  const data = await apiGet<PurchaseFrequencyServer[]>({
    endpoint: '/api/purchase-frequency',
    params,
  })

  return normalizePurchaseFrequency(data)
}
}
