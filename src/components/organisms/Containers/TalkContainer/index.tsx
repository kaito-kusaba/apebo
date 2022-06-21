import React from 'react'
import { useStyles } from './style'

export default React.memo(function TalkContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span>ここにトーク画面</span>
    </div>
  )
})
