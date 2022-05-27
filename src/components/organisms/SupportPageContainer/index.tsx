import React from 'react'
import { useStyles } from './style'

export default React.memo(function SupportPageContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span className={styles.top}>お問い合せ</span>
    </div>
  )
})
