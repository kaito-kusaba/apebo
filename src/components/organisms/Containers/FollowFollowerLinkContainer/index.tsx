import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  textStyle?: string
  containerStyle?: string
  uid: string
}

export default React.memo(function FollowFollower({ textStyle, containerStyle, uid }: Props) {
  const styles = useStyles()
  const { followers, follows, onClickFollow, onClickFollower } = useInjection({ uid })

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <div className={`${styles.followFollowerContainer} ${textStyle}`} onClick={onClickFollower}>
        <span className={styles.followFollowerLink}>{String(followers)}</span>
        フォロワー
      </div>
      <div className={`${styles.followFollowerContainer} ${textStyle}`} onClick={onClickFollow}>
        <span className={styles.followFollowerLink}>{String(follows)}</span>
        フォロー中
      </div>
    </div>
  )
})
