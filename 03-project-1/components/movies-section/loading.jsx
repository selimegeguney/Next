import Skeleton from "../skeleton"
import styles from "./styles.module.css"
const MoviesSectionLoading = () => {
  return (
    <div className={styles.moviesSection}>
      <Skeleton height={36} width={128} />

      <div className={styles.movies}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  )
}

export default MoviesSectionLoading
