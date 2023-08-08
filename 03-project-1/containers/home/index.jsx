import FeaturedMovie from "@/components/featured-movie"
import Categories from "@/components/categories"
import MoviesSection from "@/components/movies-section"

import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
const HomeContainer = ({ selectedCategory }) => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[9]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.id && (
        <MoviesSection
          title={
            Genres.genres.find(
              (category) => `${category.id}` === selectedCategory.id
            ).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="POPULAR  FILMS"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="YOUR FAVOURITES"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  )
}

export default HomeContainer
