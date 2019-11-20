import { useState, useMemo } from 'react'

export const usePagination = () => {
  const [page, setPage] = useState(1)

  const setNextPage = () => {
    setPage(page + 1)
  }
  const setPrevPage = () => {
    setPage(page - 1)
  }
  const prevDisabled = useMemo(() => {
    return page <= 1
  }, [page])
  const nextDisabled = false
  return {
    setNextPage,
    setPrevPage,
    page,
    nextDisabled,
    prevDisabled
  }
}
