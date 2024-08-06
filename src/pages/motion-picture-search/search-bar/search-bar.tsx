import { useState } from "react"

export type SearchBarProps = {
  /**
   * Callback on pressing the Search button.
   *
   * @param searchValue value entered by the user in the search box.
   */
  onSearch: (searchValue: string) => void
}

/**
 * Search bar component allows user to enter and input and triggers the onSearch callback
 * with the search string entered by the user.
 *
 * @props {@link SearchBarProps}
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<string>()

  const handleChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = () => {
    /**
     * Search button is enabled only when searchInput is not empty.
     * So we can safely assume searchInput will not be null here.
     */
    onSearch(searchInput!)
  }

  return (
    <div className="search-input-container">
      <input
        value={searchInput}
        className="search-input"
        placeholder="Enter movie or series title"
        onChange={handleChangeSearchInput}
      />

      <button
        title={!searchInput ? "Enter a title to search" : undefined}
        disabled={!searchInput}
        className="search-button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
