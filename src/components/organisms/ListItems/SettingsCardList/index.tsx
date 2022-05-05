import React from 'react'
import SettingsCard from 'components/molecules/Card/SettingsCard'
import { SETTINGS_CARD_DATAS } from './hooks'

export default React.memo(function SettingsCardList() {
  return (
    <div>
      {SETTINGS_CARD_DATAS.map(data => {
        return <SettingsCard label={data.label} subTitle={data.subTitle} icon={data.icon} url={data.url} />
      })}
    </div>
  )
})
