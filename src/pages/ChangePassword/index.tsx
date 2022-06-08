import SettingsPageContainer from 'components/organisms/SettingsPageContainer'
import SettingsScreen from 'pages/Settings'
import React from 'react'
import { useStyles } from './style'
import ChangePasswordContainer from 'components/organisms/ChangePasswordContainer'
import { AlertProvider } from 'components/molecules/Alert'

export default React.memo(function ChangePasswordScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <AlertProvider>
        <SettingsPageContainer left={<SettingsScreen />} right={<ChangePasswordContainer />} />
      </AlertProvider>
    </div>
  )
})
