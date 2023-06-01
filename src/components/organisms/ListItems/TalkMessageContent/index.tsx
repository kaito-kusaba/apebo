import Time from 'components/atoms/Time'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButton from 'components/molecules/Button/Action'
import { Timestamp } from 'firebase/firestore'
import React, { useCallback, useState } from 'react'
import { useStyles } from './style'

type Props = {
  uid: string
  message: string
  time: Timestamp
}

export default function TalkMessageContent({ message, uid, time }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const styles = useStyles({ isHovered })

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered])

  return (
    <div className={styles.container} onMouseEnter={onMouseToggle} onMouseLeave={onMouseToggle}>
      <div className={styles.contentHeader}>
        <div className={styles.contentUser}>
          <UserIcon uid={uid} size={46} />
          <div>
            <span className={styles.userData}>
              <UserName uid={uid} style={styles.userName} />
              <Time time={time} />
            </span>
            <pre className={styles.content}>{message}</pre>
          </div>
        </div>
        <div className={styles.actionButton()}>
          <ActionButton type="Other" uid={uid} />
        </div>
      </div>
    </div>
  )
}
