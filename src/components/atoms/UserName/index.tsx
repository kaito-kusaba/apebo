import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function UserName() {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  return (
    <div className={styles.userNameContainerStyle}>
      <div className={styles.userName}>[0000] Ringosi{user.displayName}</div>
      <div className={styles.userId}>@userid532423</div>
    </div>
  )
})
