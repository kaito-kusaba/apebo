import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  uid: string
}

export default React.memo(function TalkRoom({ uid }: Props) {
  const styles = useStyles({ uid })
  const navigate = useNavigate()
  const onClick = useCallback(() => {
    navigate(`/talk/${uid}`)
  }, [])
  return (
    <div className={styles.talkUserContainer()} onClick={onClick}>
      <UserIcon size={40} uid={uid} style={styles.userIcon} />
      <UserName uid={uid} hasUid={false} />
    </div>
  )
})
