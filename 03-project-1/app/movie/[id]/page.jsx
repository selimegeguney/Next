import { notFound } from "next/navigation"

import MovieContainer from "@/containers/movie"
import Movies from "@/mocks/movies.json"
import Loading from "@/components/loading"

const MoviePage = ({ params, searchParams }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  )
  if (!movieDetail) {
    notFound()
  }
  if (searchParams.error === "true") {
    throw new Error("Error occured")
  }
  if (searchParams.loading === "true") {
    return <Loading />
  }
  return <MovieContainer movie={movieDetail} />
}

export default MoviePage
