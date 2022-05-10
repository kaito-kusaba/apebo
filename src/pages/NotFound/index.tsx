import React from 'react'
import { useStyles } from './style'

export default React.memo(function NotFound() {
  const styles = useStyles()
  return (
    <div className={styles.notFound}>
      <h1>ページが見つかりませんでした。</h1>
      <a href="/">トップへ戻る</a>
    </div>
  )
})
