import { notFound } from "next/navigation"

import MovieContainer from "@/containers/movie"
import { getAllMovies } from "@/app/[[...category]]/page"
import Loading from "@/components/loading"

const MoviePage = async ({ params, searchParams }) => {
  const { results: Movies } = await getAllMovies()
  const movieDetail = Movies.find((movie) => movie.id.toString() === params.id)
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
