import { OMDB_API } from "../constants"
import { searchResponse } from "./mock-data"

export type SearchApiResponse = {
  Search: MotionPictureSearchResult[]
  totalResults: string
  Response: string
}

export type MotionPictureSearchResult = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const searchMotionPictures = async (
  searchValue: string,
  page: string = "1"
) => {
  const urlParams = new URLSearchParams()
  urlParams.set("apikey", import.meta.env.DEXTERITY_OMDB_API_KEY)
  urlParams.set("s", searchValue)
  urlParams.set("page", page)
  // Dev
  // const response = await fetch(`${OMDB_API}?${urlParams}`)
  const response = await getMock()
  const data = await response.json()

  return data
}

const getMock = () => {
  return new Promise<{
    json: () => SearchApiResponse
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => searchResponse,
      })
    }, 100)
  })
}
