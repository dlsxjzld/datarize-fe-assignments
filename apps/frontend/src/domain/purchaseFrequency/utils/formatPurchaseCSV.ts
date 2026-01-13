import { type PurchaseClient } from '../apis/purchaseApi'

export const formatPurchaseCSV = (purchases: PurchaseClient[]) => {
  return purchases.map((purchase) => ({
    날짜: purchase.date,
    고객명: purchase.customerName,
    제품명: purchase.productName,
    가격: purchase.price,
    수량: purchase.quantity,
  }))
}
