import { SettingsIcon } from 'components/atoms/Icon'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
        <Link to="/settings">
          <img src={SettingsIcon} className={styles.settingsImg} />
        </Link>
      </div>
    )
  }
  return (
    <div className={styles.screenLabelContainer}>
      <h1 className={styles.screenLabel}>{label}</h1>
    </div>
  )
})
