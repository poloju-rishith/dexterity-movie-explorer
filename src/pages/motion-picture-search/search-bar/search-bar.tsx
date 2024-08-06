import { useMemo, useState } from "react"

import debounce from "../../../common/utils/debounce"
import { DEBOUNCE_DELAY } from "../../../constants"

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
  const [searchInput, setSearchInput] = useState<string>("")

  const debouncedOnSearch = useMemo(
    () => debounce(onSearch, DEBOUNCE_DELAY),
    []
  )

  const handleChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value
    setSearchInput(value)
    if (value) {
      debouncedOnSearch(value)
    }
  }

  return (
    <input
      value={searchInput}
      className="search-input"
      placeholder="Enter movie or series title"
      onChange={handleChangeSearchInput}
    />
  )
}

export default SearchBar
