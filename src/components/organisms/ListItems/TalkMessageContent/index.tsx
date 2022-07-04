import Time from 'components/atoms/Time'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import { Timestamp } from 'firebase/firestore'
import React from 'react'
import { useStyles } from './style'

type Props = {
  uid: string
  message: string
  time: Timestamp
}

export default function TalkMessageContent({ message, uid, time }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <UserIcon uid={uid} size={46} />
        <div>
          <div className={styles.rightContainer}>
            <UserName uid={uid} noDisplayUid style={styles.userName} />
            <Time time={time} />
          </div>
          <pre className={styles.content}>{message}</pre>
        </div>
      </div>
    </div>
  )
}
