import React from 'react'
import SettingsCard from 'components/molecules/Card/SettingsCard'
import { SETTINGS_CARD_DATAS } from './hooks'
import { useStyles } from './style'

export default React.memo(function SettingsCardList() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {SETTINGS_CARD_DATAS.map(data => {
        return (
          <SettingsCard
            label={data.label}
            subTitle={data.subTitle}
            icon={data.icon}
            url={data.url}
            bottom={data.bottom}
            isSignOut={data.isSignOut}
          />
        )
      })}
    </div>
  )
})
