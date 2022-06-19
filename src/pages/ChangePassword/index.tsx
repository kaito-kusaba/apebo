import SettingsPageContainer from 'components/organisms/Containers/SettingsPageContainer'
import SettingsScreen from 'pages/Settings'
import React from 'react'
import { useStyles } from './style'
import ChangePasswordContainer from 'components/organisms/Containers/ChangePasswordContainer'
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
