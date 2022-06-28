import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  uid: string
}

export default function FollowButton({ uid }: Props) {
  const { onClick, followed, label, onMouseToggle } = useInjection({ uid })
  const styles = useStyles({ followed })
  const { user } = useSelector(({ user }: RootState) => user)

  if (uid !== user!.uid) {
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
  } else {
    return <></>
  }
}
