import FollowFollowerContent from 'components/organisms/ListItems/FollowFollowerContent'
import React from 'react'
import { useInjection } from './hooks'

export default function FollowListContainer() {
  const { followList } = useInjection()
  return (
    <div>
      {followList.map(follow => {
        return <FollowFollowerContent uid={follow} key={follow} />
      })}
    </div>
  )
}
