import HomeContainer from "@/containers/home"

import Movies from "@/mocks/movies.json"

const API_URL = "https://api.themoviedb.org/3"

const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg3NTExY2RiNmU5ZDNiZWIwMTdhY2FmNWI1YzViNyIsInN1YiI6IjY0ZGY0NDJiZTE5ZGU5MDBlMzQyYzFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iKidjNymMT_wYDJX09kTUJU_bNMCWUBM9wurvSPHzA",
    },
  }
  const res = await fetch(`${API_URL}/movie/popular?page=1`, options)
  return res.json()
}
const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg3NTExY2RiNmU5ZDNiZWIwMTdhY2FmNWI1YzViNyIsInN1YiI6IjY0ZGY0NDJiZTE5ZGU5MDBlMzQyYzFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iKidjNymMT_wYDJX09kTUJU_bNMCWUBM9wurvSPHzA",
    },
  }
  const res = await fetch(`${API_URL}/movie/top_rated?page=1`, options)
  return res.json()
}

export const getAllMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg3NTExY2RiNmU5ZDNiZWIwMTdhY2FmNWI1YzViNyIsInN1YiI6IjY0ZGY0NDJiZTE5ZGU5MDBlMzQyYzFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iKidjNymMT_wYDJX09kTUJU_bNMCWUBM9wurvSPHzA",
    },
  }
  const res = await fetch(`${API_URL}/discover/movie?page=1`, options)
  return res.json()
}

export default async function Home({ params }) {
  const popularPromise = getPopularMovies()
  const topRatedPromise = getTopRatedMovies()
  const moviesPromise = getAllMovies()

  const [
    { results: allPopularMovies },
    { results: allTopRatedMovies },
    { results: allMovies },
  ] = await Promise.all([popularPromise, topRatedPromise, moviesPromise])

  let isSelected
  if (params.category?.length > 0) {
    isSelected = true
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: isSelected
          ? allMovies
              .filter((movie) =>
                movie.genre_ids.includes(Number(params.category[0]))
              )
              .slice(0, 6)
          : [],
      }}
      popularMovies={allPopularMovies}
      topRatedMovies={allTopRatedMovies}
    />
  )
}
