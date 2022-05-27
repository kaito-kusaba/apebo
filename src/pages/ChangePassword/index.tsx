import SettingsPageContainer from 'components/organisms/SettingsPageContainer'
import SettingsScreen from 'pages/Settings'
import React from 'react'
import { useStyles } from './style'
import ChangePasswordContainer from 'components/organisms/ChangePasswordContainer'

export default React.memo(function ChangePasswordScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsPageContainer left={<SettingsScreen />} right={<ChangePasswordContainer />} />
    </div>
  )
})
