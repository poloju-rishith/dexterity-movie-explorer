import { MotionPicturesSearchResult } from "../../../api/search-motion-pictures"

import "../styles/search-result.css"

type SearchResultProps = {
  motionPictureSearchResult: MotionPicturesSearchResult
  onSearchResultClick: React.MouseEventHandler<HTMLDivElement>
}

const SearchResult: React.FC<SearchResultProps> = ({
  motionPictureSearchResult,
  onSearchResultClick,
}) => {
  return (
    <div
      className="search-result"
      onClick={onSearchResultClick}
      data-imdbid={motionPictureSearchResult.imdbID}
    >
      {motionPictureSearchResult.Poster &&
      motionPictureSearchResult.Poster !== "N/A" ? (
        <img
          src={motionPictureSearchResult.Poster}
          width={230}
          height={250}
          alt={motionPictureSearchResult.Title}
        />
      ) : (
        <div className="n-a-poster">Poster not available</div>
      )}
      <span className="title">{motionPictureSearchResult.Title}</span>
      <span>{motionPictureSearchResult.Type}</span>
      <span>{motionPictureSearchResult.Year}</span>
    </div>
  )
}

export default SearchResult
