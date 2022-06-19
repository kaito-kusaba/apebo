import { useStyles } from './style'
import React from 'react'
import SettingsScreen from 'pages/Settings'
import SettingsPageContainer from 'components/organisms/Containers/SettingsPageContainer'
import SupportPageContainer from 'components/organisms/Containers/SupportPageContainer'

export default React.memo(function ChangeEmailScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsPageContainer left={<SettingsScreen />} right={<SupportPageContainer />} />
    </div>
  )
})
