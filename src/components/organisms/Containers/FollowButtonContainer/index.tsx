import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  uid: string
}

export default function FollowButton({ uid }: Props) {
  const { onClick, followed } = useInjection({ uid })
  const styles = useStyles()

  return (
    <div className={styles.container}>
      {!followed ? (
        <button className={styles.followButton} onClick={onClick}>
          フォローする
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}
