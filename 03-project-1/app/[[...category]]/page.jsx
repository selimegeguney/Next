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

export default async function Home({ params }) {
  const { results: allPopularMovies } = await getPopularMovies()
  const { results: allTopRatedMovies } = await getTopRatedMovies()
  let selectedCategory
  if (params.category?.length > 0) {
    selectedCategory = true
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(13, 19) : [],
      }}
      popularMovies={allPopularMovies}
      topRatedMovies={allTopRatedMovies}
    />
  )
}
