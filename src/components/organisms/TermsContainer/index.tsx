import React from 'react'
import { useStyles } from './style'

export default React.memo(function TermsContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span className={styles.top}>利用規約</span>
    </div>
  )
})
