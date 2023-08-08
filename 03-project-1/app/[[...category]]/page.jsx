import HomeContainer from "@/containers/home"

import Movies from "@/mocks/movies.json"

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Home({ params }) {
  await delay(1500)

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
    />
  )
}
