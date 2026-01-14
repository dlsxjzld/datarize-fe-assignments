import { useState } from 'react'

export const usePagination = (initialPage: number = 1, limit: number = 20) => {
  const [page, setPage] = useState(initialPage)

  const changePage = (newPage: number) => {
    setPage(newPage)
  }

  const resetPage = () => {
    setPage(1)
  }

  return {
    page,
    limit,
    changePage,
    resetPage,
  }
}
