import React from 'react'
import { useStyles } from './style'

export default React.memo(function SearchButton() {
  const styles = useStyles()

  return (
    <button className={styles.container}>
      <span className={styles.text}>検索する</span>
    </button>
  )
})
