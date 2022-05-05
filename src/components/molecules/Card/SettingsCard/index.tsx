import React from 'react'
import { Link } from 'react-router-dom'
import { SettingsCardType } from 'types/SettingsCardTypes'
import { RightArrowIcon } from 'components/atoms/Icon'
import { useStyles } from './style'

type SettingsCardProp = Required<SettingsCardType>

export default React.memo(function SettingsCard({ url, icon, label, subTitle }: SettingsCardProp) {
  const styles = useStyles()
  return (
    <Link to={url} className={styles.settingsCardContainer}>
      <div className={styles.settingsCardContainer}>
        <img className={styles.settingsCardIcon} src={icon} alt="" />
        <div>
          <h3>{label}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
      <img src={RightArrowIcon} />
    </Link>
  )
})
