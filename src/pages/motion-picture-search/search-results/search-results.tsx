import { MotionPicturesSearchResult } from "../../../api/search-motion-pictures"
import SearchResult from "./search-result"

type SearchResultsProps = {
  motionPictureSearchResults: MotionPicturesSearchResult[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  motionPictureSearchResults,
}) => {
  return (
    <div className="search-results">
      {motionPictureSearchResults.map((motionPictureSearchResult) => (
        <SearchResult motionPictureSearchResult={motionPictureSearchResult} />
      ))}
    </div>
  )
}

export default SearchResults
