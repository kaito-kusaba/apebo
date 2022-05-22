import React from 'react'
import { useStyles } from './style'
import NavigationButton from 'components/organisms/Button/Navigation'
import Divider from 'components/atoms/Divider'

export default React.memo(function NavigationBar() {
  const styles = useStyles()
  return (
    <div className={styles.navigationBarStyle}>
      <NavigationButton type="Home" />
      <NavigationButton type="Account" />
      <NavigationButton type="Post" />
      <Divider />
      <NavigationButton type="Settings" style={styles.settingsButton} />
    </div>
  )
})
