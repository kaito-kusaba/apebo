import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  uid: string
  roomId: string
}

export default function TalkRoomContent({ uid, roomId }: Props) {
  const { onClick } = useInjection({ uid })
  const styles = useStyles({ roomId })

  return (
    <div className={styles.container()} onClick={onClick}>
      <UserIcon uid={uid} size={40} disabled />
      <UserName uid={uid} style={styles.userName} noDisplayUid disabled />
    </div>
  )
}
