import FollowFollowerContent from 'components/organisms/ListItems/FollowFollowerContent'
import React from 'react'
import { useInjection } from './hooks'

export default function FollowerListContainer() {
  const { followerList } = useInjection()
  return (
    <div>
      {followerList.map(follower => {
        return <FollowFollowerContent uid={follower} key={follower} />
      })}
    </div>
  )
}
