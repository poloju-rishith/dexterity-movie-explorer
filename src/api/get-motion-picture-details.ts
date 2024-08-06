import { OMDB_API } from "../constants"

export type MotionPictureRating = {
  Source: string
  Value: string
}

export type MotionPictureDetailType = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  Ratings: MotionPictureRating[]
}

export const getMotionPictureDetails = async (id: string) => {
  const urlParams = new URLSearchParams()
  urlParams.set("apikey", import.meta.env.DEXTERITY_OMDB_API_KEY)
  urlParams.set("i", id)

  const response = await fetch(`${OMDB_API}?${urlParams}`)
  const data = await response.json()

  return data as MotionPictureDetailType
}
