import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButton from 'components/molecules/Button/Action'
import BioDisplay from 'components/organisms/BioDisplay'
import React from 'react'
import { useStyles } from './style'

type Props = {
  uid: string
}

export default function FollowFollowerContent({ uid }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        <div className={styles.userContainer}>
          <UserIcon uid={uid} size={46} />
          <UserName uid={uid} style={styles.userName} hasPlatform isDisplayUid />
        </div>
        <span>
          <ActionButton type="Follow" uid={uid} />
        </span>
      </div>
      <BioDisplay uid={uid} style={styles.bio} />
    </div>
  )
}
