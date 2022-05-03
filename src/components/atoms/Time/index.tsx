import React from 'react'
import { useStyles } from './style'

export default React.memo(function Time() {
  const styles = useStyles()
  //TODO: 投稿日時を取得して表示
  return <span className={styles.time}>2022/12/25 21:18</span>
})
