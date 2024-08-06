import { useNavigate } from "react-router-dom"
import { MotionPicturesSearchResult } from "../../../api/search-motion-pictures"
import SearchResult from "./search-result"

type SearchResultsProps = {
  motionPictureSearchResults: MotionPicturesSearchResult[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  motionPictureSearchResults,
}) => {
  const navigate = useNavigate()

  const handleMotionPictureClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    const id = event.currentTarget.dataset.imdbid
    navigate(`/detail/${id}`)
  }

  return (
    <div className="search-results">
      {motionPictureSearchResults.map((motionPictureSearchResult) => (
        <SearchResult
          key={motionPictureSearchResult.imdbID}
          motionPictureSearchResult={motionPictureSearchResult}
          onSearchResultClick={handleMotionPictureClick}
        />
      ))}
    </div>
  )
}

export default SearchResults
