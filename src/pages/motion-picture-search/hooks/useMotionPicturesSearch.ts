import { useCallback, useMemo, useState } from "react"

import {
  searchMotionPictures,
  MotionPicturesSearchApiResponse,
} from "../../../api/search-motion-pictures"

/**
 * Hook to handle the searching and pagination of a Motion Pictures
 */
const useMotionPicturesSearch = () => {
  const [error, setError] = useState<unknown>()
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  /**
   * Holds the responses with page number as the key.
   */
  const [pageCache, setPageCache] = useState<
    Record<number, MotionPicturesSearchApiResponse>
  >({})

  /**
   * Handles the API call trigger and setting the states based on the response
   */
  const handleSearch = useCallback(
    async (page: number, searchInput?: string) => {
      setLoading(true)
      setCurrentPage(page)

      try {
        const response = await searchMotionPictures(
          searchInput ?? searchValue,
          page
        )
        /**
         * Setting the response data in the page cache with
         * page number as the key and response as the value.
         */
        setPageCache((previousPageCache) => ({
          ...previousPageCache,
          [page]: response,
        }))
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [searchValue]
  )

  /**
   * Search function exposed from the hook that can be called with
   * a search value.
   */
  const search = useCallback((searchInput: string) => {
    /** Resetting the page cache. */
    setPageCache({})
    /** Holding a the search string to be used later with goToNextPage and goToPreviousPage */
    setSearchValue(searchInput)
    handleSearch(1, searchInput)
  }, [])

  const goToNextPage = useCallback(() => {
    handleSearch(currentPage + 1)
  }, [currentPage, handleSearch])

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      handleSearch(currentPage - 1)
    }
  }, [currentPage, handleSearch])

  return useMemo(
    () => ({
      search,
      goToNextPage,
      goToPreviousPage,
      /**
       * Gets data from the cache for a current page.
       * This allows the user to click next button continously and see the
       * correct result instead of seeing the results of previous search queries.
       *
       * Also when user click previous the data is already loaded and can be quickly shown.
       * The fetch policy here is like cache-and-network. Data from the cache is shown. But
       * data is also requested from the network. So if data changes the cache is updated.
       */
      data: pageCache[currentPage],
      currentPage,
      error,
      loading,
    }),
    [pageCache, currentPage, error, loading, search, goToNextPage]
  )
}

export default useMotionPicturesSearch
