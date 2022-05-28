import React from 'react'
import { useStyles } from './style'

export default React.memo(function Recommendation() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <span className={styles.label}>最近のおすすめユーザー</span>
    </div>
  )
})
