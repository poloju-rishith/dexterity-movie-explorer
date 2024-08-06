import { searchMotionPictures } from "../../api/search-motion-pictures"
import SearchBar from "./search-bar"
import { SearchBarProps } from "./search-bar/search-bar"

const MotionPictureSearch = () => {
  const handleSearch: SearchBarProps["onSearch"] = (searchValue) => {
    searchMotionPictures(searchValue)
  }

  return (
    <div className="motion-picture-search">
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}

export default MotionPictureSearch
