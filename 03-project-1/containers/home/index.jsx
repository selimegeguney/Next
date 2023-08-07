import FeaturedMovie from "@/components/featured-movie"
import Movies from "@/mocks/movies.json"
import Categories from "@/components/categories"
import Genres from "@/mocks/genres.json"
const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[9]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
    </div>
  )
}

export default HomeContainer
