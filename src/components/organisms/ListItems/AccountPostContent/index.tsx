import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/PostContentDisplay'
import React from 'react'
import { useStyles } from './style'
import Time from 'components/atoms/Time'
import { Timestamp } from 'firebase/firestore'
import { useInjection } from './hook'

interface Props {
  uid: string
  content: string
  onClick: () => void
  time: Timestamp
  docId: string
}

export default function AccountPostContent({ uid, content, onClick, time, docId }: Props) {
  const styles = useStyles()
  const { onClickOther, onClickMessage } = useInjection({ uid })

  return (
    <div onClick={onClick} className={styles.postContentContainerStyle}>
      <div className={styles.postContentHeader}>
        <div className={styles.postContentUser}>
          <UserIcon uid={uid} size={46} style={styles.postContentUserIcon} />
          <UserName uid={uid} />
        </div>
        <ActionButtonSet
          onClickOther={() => onClickOther(docId)}
          uid={uid}
          docId={docId}
          onClickMessage={onClickMessage}
        />
      </div>
      <PostContentDisplay content={content} style={styles.postContentDisplay} />
      <Time time={time} />
    </div>
  )
}
