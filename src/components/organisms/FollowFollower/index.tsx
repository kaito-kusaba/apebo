import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'

interface Props {
  follows: number
  followers: number
  textStyle?: string
  containerStyle?: string
}

export default React.memo(function FollowFollower({ follows, followers, textStyle, containerStyle }: Props) {
  const styles = useStyles()
  return (
    <div className={`${styles.followFollowerContainer} ${containerStyle}`}>
      <span className={`${styles.followFollowerText} ${textStyle}`}>
        <Link to="/followers" className={styles.followFollowerLink}>
          {followers.toLocaleString()}
        </Link>
        フォロワー
      </span>
      <span className={`${styles.followFollowerText} ${textStyle}`}>
        <Link to="/following" className={styles.followFollowerLink}>
          {follows.toLocaleString()}
        </Link>
        フォロー中
      </span>
    </div>
  )
})
