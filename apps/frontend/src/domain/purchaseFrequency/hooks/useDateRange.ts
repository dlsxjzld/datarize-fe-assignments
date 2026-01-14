import { useState } from 'react'

export const useDateRange = (initialFrom: string, initialTo: string) => {
  const [dateRange, setDateRange] = useState({
    from: initialFrom,
    to: initialTo,
  })

  const updateFrom = (newFrom: string) => {
    if (!newFrom) return

    if (newFrom > dateRange.to) {
      setDateRange({ from: dateRange.to, to: newFrom })
      return
    }

    setDateRange({ from: newFrom, to: dateRange.to })
  }

  const updateTo = (newTo: string) => {
    if (!newTo) return

    if (newTo < dateRange.from) {
      setDateRange({ from: newTo, to: dateRange.from })
      return
    }

    setDateRange({ from: dateRange.from, to: newTo })
  }

  return {
    dateRange,
    updateFrom,
    updateTo,
  }
}
