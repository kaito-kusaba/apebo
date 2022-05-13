import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

interface Props {
  style?: string
  hideUid?: boolean
}

export default React.memo(function UserName({ style, hideUid }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const { username } = useSelector(({ username }: RootState) => username)
  console.log(user)
  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={styles.userName}>{username ? username : '匿名さん'}</div>
      {!hideUid && <div className={styles.userId}>@{user?.uid ? user.uid : '@anonymous_user'}</div>}
    </div>
  )
})
