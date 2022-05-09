import React from 'react'
import { useLocation } from 'react-router-dom'
import { useStyles } from './style'

interface Props {
  label: string | null
}

export default React.memo(function ScreenLabel({ label }: Props) {
  const styles = useStyles()
  const location = useLocation()
  if (location.pathname === '/account') {
    return (
      <div className={styles.screenLabelContainer}>
        <div>
          <h1 className={styles.screenLabel}>{label}</h1>
          <span className={styles.screenLabelSubTitle}>件の投稿</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.screenLabelContainer}>
        <h1 className={styles.screenLabel}>{label}</h1>
      </div>
    )
  }
})
