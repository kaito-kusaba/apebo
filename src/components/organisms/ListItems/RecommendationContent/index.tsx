import React from 'react'
import { useStyles } from './style'
import RecommendationUser from '../RecommendationUser'

export default React.memo(function Recommendation() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <span className={styles.label}>最近のおすすめユーザー</span>
      <RecommendationUser />
    </div>
  )
})
