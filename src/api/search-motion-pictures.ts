import { OMDB_API } from "../constants"

export type MotionPicturesSearchApiResponse = {
  Search: MotionPicturesSearchResult[]
  totalResults: string
  Response: string
}

export type MotionPicturesSearchResult = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const searchMotionPictures = async (
  searchValue: string,
  page: number = 1
) => {
  const urlParams = new URLSearchParams()
  urlParams.set("apikey", import.meta.env.DEXTERITY_OMDB_API_KEY)
  urlParams.set("s", searchValue)
  urlParams.set("page", String(page))

  const response = await fetch(`${OMDB_API}?${urlParams}`)
  const data = await response.json()

  return data
}
