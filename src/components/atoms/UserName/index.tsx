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
  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={styles.userName}>[0000] Ringosi{user.displayName}</div>
      {!hideUid && <div className={styles.userId}>@userid532423</div>}
    </div>
  )
})
