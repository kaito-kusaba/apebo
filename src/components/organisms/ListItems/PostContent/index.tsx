import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/Displays/PostContentDisplay'
import React from 'react'
import { useStyles } from './style'
import Time from 'components/atoms/Time'
import { Timestamp } from 'firebase/firestore'
import { useInjection } from './hooks'

type Props = {
  uid: string
  content: string
  time: Timestamp
  docId: string
}

export default function PostContent({ uid, content, time, docId }: Props) {
  const { onClick } = useInjection({ docId, uid })
  const styles = useStyles()

  return (
    <div onClick={onClick} className={styles.postContentContainerStyle}>
      <div className={styles.postContentHeader}>
        <div className={styles.postContentUser}>
          <UserIcon uid={uid} size={46} style={styles.postContentUserIcon} hasPlayStyle />
          <UserName uid={uid} hasPlatform />
        </div>
        <ActionButtonSet docId={docId} uid={uid} />
      </div>
      <PostContentDisplay content={content} style={styles.postContentDisplay} />
      <Time time={time} />
    </div>
  )
}
