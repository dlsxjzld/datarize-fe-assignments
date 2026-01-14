import { apiGet } from '@/common/apis/apis'

export type SortField = 'id' | 'totalAmount'
export type SortDirection = 'asc' | 'desc'

export type SortOption = `${SortField}-${SortDirection}`

export interface CustomerServer {
  id: number
  name: string
  count: number
  totalAmount: number
}

export interface CustomerClient {
  id: number
  name: string
  count: number
  totalAmount: number
}

export interface PaginationServer {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginationClient {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface CustomersResponseServer {
  data: CustomerServer[]
  pagination: PaginationServer
}

export interface CustomersResponseClient {
  customers: CustomerClient[]
  pagination: PaginationClient
}

export type FetchCustomersParams = {
  sortBy?: SortDirection
  name?: string
  page?: number
  limit?: number
  from?: string
  to?: string
}

const normalizeCustomer = (customers: CustomerServer[]): CustomerClient[] => {
  return customers.map((customer) => ({
    ...customer,
  }))
}

const normalizePagination = (pagination: PaginationServer): PaginationClient => {
  return {
    ...pagination,
  }
}

export const fetchCustomers = async (params: FetchCustomersParams): Promise<CustomersResponseClient> => {
  const response = await apiGet<CustomersResponseServer>({ endpoint: '/api/customers', params })

  return {
    customers: normalizeCustomer(response.data),
    pagination: normalizePagination(response.pagination),
  }
}

export interface CustomerPurchaseServer {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

export interface CustomerPurchaseClient {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

export interface FetchCustomerPurchasesParams {
  customerId: number
  from?: string
  to?: string
}

const normalizePurchase = (purchases: CustomerPurchaseServer[]): CustomerPurchaseClient[] => {
  return purchases.map((purchase) => ({
    ...purchase,
  }))
}

export const fetchCustomerPurchases = async ({
  customerId,
  ...rest
}: FetchCustomerPurchasesParams): Promise<CustomerPurchaseClient[]> => {
  const response = await apiGet<CustomerPurchaseServer[]>({
    endpoint: `/api/customers/${customerId}/purchases`,
    params: { ...rest },
  })

  return normalizePurchase(response)
}
