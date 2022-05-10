import React from 'react'
import { Link } from 'react-router-dom'
import { SettingsCardType } from 'types/SettingsCardTypes'
import { RightArrowIcon } from 'components/atoms/Icon'
import { useStyles } from './style'

export default React.memo(function SettingsCard({ url, icon, label, subTitle, bottom, isSignOut }: SettingsCardType) {
  const styles = useStyles({ bottom, isSignOut })
  return (
    <Link to={url} className={`${styles.settings} ${styles.settingsCardContainer()}`}>
      <div className={styles.leftContainer}>
        <img className={styles.settingsCardIcon} src={icon} alt="" />
        <div>
          <h3 className={styles.label()}>{label}</h3>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
      </div>
      <img className={styles.settingsArrow} src={RightArrowIcon} />
    </Link>
  )
})
