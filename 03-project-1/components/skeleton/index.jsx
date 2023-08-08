import React from "react"
import styles from "./styles.module.css"
const Skeleton = ({ width, height }) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>
}

export default Skeleton
