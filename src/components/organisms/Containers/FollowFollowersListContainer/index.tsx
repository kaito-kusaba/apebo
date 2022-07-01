import BackButtonLabel from 'components/molecules/Label/BackButtonLabel'
import React from 'react'
import FollowerListContainer from 'components/organisms/Containers/FollowerListContainer'
import FollowListContainer from 'components/organisms/Containers/FollowListContainer'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default function FollowFollowersListContainer() {
  const { onClickFollow, onClickFollower, onClickBackButton, label, pageIndex } = useInjection()
  const styles = useStyles({ pageIndex })

  const ContentsList: React.VFC = () => {
    switch (pageIndex) {
      case 0:
        return <FollowListContainer />
      case 1:
        return <FollowerListContainer />
      default:
        return <></>
    }
  }

  return (
    <div className={styles.container}>
      <BackButtonLabel label={label} onClick={onClickBackButton} />
      <div className={styles.selectButton}>
        <div className={styles.followerButton()} onClick={onClickFollower}>
          <span className={styles.followerLabel()}>フォロワー</span>
        </div>
        <div className={styles.followButton()} onClick={onClickFollow}>
          <span className={styles.followLabel()}>フォロー中</span>
        </div>
      </div>
      <ContentsList />
    </div>
  )
}
