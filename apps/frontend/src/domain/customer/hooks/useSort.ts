import { useState } from 'react'
import { SortDirection, SortField, SortOption } from '../apis/customerApi'

const SORT_OPTIONS = ['id-asc', 'totalAmount-desc', 'totalAmount-asc'] as const
type SortOptionsWithoutIdDesc = Exclude<SortOption, 'id-desc'>

export const useSort = (initialSort: SortOptionsWithoutIdDesc = 'id-asc') => {
  const [sortBy, setSortBy] = useState<SortOptionsWithoutIdDesc>(initialSort)

  const toggleSort = () => {
    const currentIndex = SORT_OPTIONS.indexOf(sortBy)
    const nextIndex = (currentIndex + 1) % SORT_OPTIONS.length
    setSortBy(SORT_OPTIONS[nextIndex])
  }

  const [sortField, sortDirection] = sortBy.split('-') as [SortField, SortDirection]

  return { sortBy, sortField, sortDirection, toggleSort }
}
