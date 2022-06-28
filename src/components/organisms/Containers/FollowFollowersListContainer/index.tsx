import BackButtonLabel from 'components/molecules/Label/BackButtonLabel'
import FollowFollowerContent from 'components/organisms/ListItems/FollowFollowerContent'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default function FollowFollowersListContainer() {
  const styles = useStyles()
  const { onClickFollow, onClickFollower, label, followList, followerList } = useInjection()
  const location = useLocation()

  return (
    <div className={styles.container}>
      <BackButtonLabel label={label} />
      <div className={styles.selectButton}>
        <span className={styles.followerButton()} onClick={onClickFollower}>
          <span className={styles.followerLabel()}>フォロワー</span>
        </span>
        <span className={styles.followButton()} onClick={onClickFollow}>
          <span className={styles.followLabel()}>フォロー中</span>
        </span>
      </div>
      {location.pathname.match(/follows/) ? (
        <div>
          {followList.map(follow => {
            return <FollowFollowerContent uid={follow} key={follow} />
          })}
        </div>
      ) : (
        <div>
          {followerList.map(follower => {
            return <FollowFollowerContent uid={follower} key={follower} />
          })}
        </div>
      )}
    </div>
  )
}
