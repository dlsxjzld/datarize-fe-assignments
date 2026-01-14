import { useState } from 'react'
import { useDebounce } from '@/common/hooks/useDebounce'

export const useSearch = (initialValue: string = '') => {
  const [searchName, setSearchName] = useState(initialValue)
  const debouncedSearchName = useDebounce(searchName)

  const updateSearch = (value: string) => {
    setSearchName(value)
  }

  return {
    searchName,
    debouncedSearchName,
    updateSearch,
  }
}
