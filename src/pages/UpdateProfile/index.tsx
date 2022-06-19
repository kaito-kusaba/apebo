import { useStyles } from './style'
import React from 'react'
import SettingsScreen from 'pages/Settings'
import SettingsPageContainer from 'components/organisms/SettingsPageContainer'
import UpdateProfileContainer from 'components/organisms/UpdateProfileContainer'
import { AlertProvider } from 'components/molecules/Alert'

export default React.memo(function ChangeEmailScreen() {
  const styles = useStyles()
  window.scroll({ top: 0 })
  return (
    <div className={styles.container}>
      <AlertProvider>
        <SettingsPageContainer left={<SettingsScreen />} right={<UpdateProfileContainer />} />
      </AlertProvider>
    </div>
  )
})
