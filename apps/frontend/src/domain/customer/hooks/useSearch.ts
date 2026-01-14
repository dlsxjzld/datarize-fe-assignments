import { useState } from 'react'

export const useSearch = (initialValue: string = '') => {
  const [searchName, setSearchName] = useState(initialValue)

  const updateSearch = (value: string) => {
    setSearchName(value)
  }

  return {
    searchName,
    updateSearch,
  }
}
