//import SafeView from 'components/atoms/SafeView'
import { useStyles } from './style'
import React from 'react'
import SettingsScreen from 'pages/Settings'
import SettingsPageContainer from 'components/organisms/SettingsPageContainer'
import ChangeEmailContainer from 'components/organisms/ChangeEmailContainer'
import { AlertProvider } from 'components/molecules/Alert'

export default React.memo(function ChangeEmailScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <AlertProvider>
        <SettingsPageContainer left={<SettingsScreen />} right={<ChangeEmailContainer />} />
      </AlertProvider>
    </div>
  )
})
