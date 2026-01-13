import { PurchaseFrequencyClient } from '../apis/purchaseApi'

export const formatPriceRange = (range: PurchaseFrequencyClient['range']): string => {
  if (range.end === null) {
    return `${range.start.toLocaleString()}원 이상`
  }
  return `${range.start.toLocaleString()}원 ~ ${range.end.toLocaleString()}원`
}
