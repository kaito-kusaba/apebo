import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  uid: string
}

export default function FollowButton({ uid }: Props) {
  const { onClick, followed, label, onMouseToggle } = useInjection({ uid })
  const styles = useStyles({ followed })

  return (
    <div className={styles.container}>
      <button
        className={styles.followButton()}
        onClick={onClick}
        onMouseEnter={onMouseToggle}
        onMouseLeave={onMouseToggle}>
        {label}
      </button>
    </div>
  )
}
