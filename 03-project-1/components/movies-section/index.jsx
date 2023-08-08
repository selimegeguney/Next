import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"

const MoviesSection = ({ title, movies }) => {
  return (
    <section className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoviesSection
