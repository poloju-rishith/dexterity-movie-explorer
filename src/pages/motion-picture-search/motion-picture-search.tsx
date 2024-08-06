import Alert from "../../common/components/alert"
import Loader from "../../common/components/loader"

import { SearchBarProps } from "./search-bar/search-bar"
import SearchBar from "./search-bar"
import SearchResults from "./search-results"
import useMotionPicturesSearch from "./hooks/useMotionPicturesSearch"

/**
 * Component that facilitates searching for motion pictures.
 */
const MotionPictureSearch = () => {
  const {
    search,
    goToNextPage,
    goToPreviousPage,
    data,
    error,
    loading,
    currentPage,
  } = useMotionPicturesSearch()

  const handleSearch: SearchBarProps["onSearch"] = (searchValue) => {
    search(searchValue)
  }

  const renderSearchResults = () => {
    if (loading) {
      return <Loader tip="Loading Motion Pictures..." />
    }

    if (error) {
      return (
        <Alert message="Something went wrong while loading Motion Pictures. Please try again." />
      )
    }

    return <SearchResults motionPictureSearchResults={data?.Search ?? []} />
  }

  return (
    <div className="motion-picture-search">
      <SearchBar onSearch={handleSearch} />
      {Boolean(data) && (
        <div className="pagination-container">
          <div className="pagination-controls">
            <button
              disabled={currentPage < 2}
              className="pagination-button"
              title="Go to Previous page"
              onClick={goToPreviousPage}
            >
              &lt;
            </button>
            <span>{currentPage}</span>
            <button
              className="pagination-button"
              title="Go to Next page"
              onClick={goToNextPage}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
      {renderSearchResults()}
    </div>
  )
}

export default MotionPictureSearch
