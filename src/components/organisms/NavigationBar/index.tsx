import React from 'react'
import { useStyles } from './style'
import NavigationButton from 'components/organisms/Button/Navigation'
import Divider from 'components/atoms/Divider'
import UserIcon from 'components/atoms/UserIcon'

export default React.memo(function NavigationBar() {
  const styles = useStyles()
  return (
    <div className={styles.navigationBarStyle}>
      <NavigationButton type="Home" />
      <NavigationButton type="Account" />
      <NavigationButton type="Post" />
      <Divider />
      <UserIcon size={40} />
      <NavigationButton type="Settings" style={styles.settingsButton} />
    </div>
  )
})
