import SettingsPageContainer from 'components/organisms/Containers/SettingsPageContainer'
import SettingsScreen from 'pages/Settings'
import TermsContainer from 'components/organisms/Containers/TermsContainer'
import { useStyles } from './style'
import React from 'react'

export default React.memo(function TermsScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsPageContainer left={<SettingsScreen />} right={<TermsContainer />} />
    </div>
  )
})
