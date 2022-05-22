import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

interface Props {
  style?: string
  uid?: string
}

export default React.memo(function UserName({ style, uid }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={styles.userName}>{user?.displayName}</div>
      <div className={styles.userId}>@{uid ? uid : 'anonymous_user'}</div>
    </div>
  )
})
