import React from 'react'
import { useStyles } from './style'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'

export default React.memo(function RecommendationUser() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <UserIcon uid={''} size={46} style={styles.userIcon} />
      <UserName uid={''} style={styles.userName} />
    </div>
  )
})
