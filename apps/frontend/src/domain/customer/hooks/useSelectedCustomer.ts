import { useState, useCallback } from 'react'

export interface Customer {
  id: number
  name: string
  count: number
  totalAmount: number
}

export const useSelectedCustomer = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  const selectCustomer = useCallback((customer: Customer) => {
    setSelectedCustomer(customer)
  }, [])

  const clearCustomer = useCallback(() => {
    setSelectedCustomer(null)
  }, [])

  return {
    selectedCustomer,
    selectCustomer,
    clearCustomer,
  }
}
