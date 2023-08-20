import FeaturedMovie from "@/components/featured-movie"
import Categories from "@/components/categories"
import MoviesSection from "@/components/movies-section"

// import Movies from "@/mocks/movies.json"

import { getAllMovies } from "@/app/[[...category]]/page"

const API_URL = "https://api.themoviedb.org/3"

const getGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg3NTExY2RiNmU5ZDNiZWIwMTdhY2FmNWI1YzViNyIsInN1YiI6IjY0ZGY0NDJiZTE5ZGU5MDBlMzQyYzFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iKidjNymMT_wYDJX09kTUJU_bNMCWUBM9wurvSPHzA",
    },
  }
  const res = await fetch(`${API_URL}/genre/movie/list`, options)
  console.log(res)
  return res.json()
}

const HomeContainer = async ({
  selectedCategory,
  popularMovies = [],
  topRatedMovies = [],
}) => {
  const { results: Movies } = await getAllMovies()
  const { genres: GENRES } = await getGenres()
  return (
    <div>
      <FeaturedMovie movie={Movies[9]} />
      <Categories categories={GENRES.slice(0, 5)} />
      {selectedCategory.id && (
        <MoviesSection
          title={
            GENRES.find((category) => `${category.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="POPULAR FILMS" movies={popularMovies.slice(0, 6)} />
      <MoviesSection
        title="YOUR FAVOURITES"
        movies={topRatedMovies.slice(0, 6)}
      />
    </div>
  )
}

export default HomeContainer
