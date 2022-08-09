import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import SettingsCardList from 'components/organisms/ListItems/SettingsCardList'
import React from 'react'

export default React.memo(function SettingsScreen() {
  return (
    <SafeView>
      <ScreenLabel label="設定" />
      <SettingsCardList />
    </SafeView>
  )
})
