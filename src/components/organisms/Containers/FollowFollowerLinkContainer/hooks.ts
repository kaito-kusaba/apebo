import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const [followers, setFollowers] = useState<number>(0)
  const [follows, setFollows] = useState<number>(0)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const ref = collection(db, 'follows')
    const followCollectionRef = query(ref, where('follow_id', '==', uid))
    onSnapshot(followCollectionRef, querySnapshot => {
      setFollows(querySnapshot.docs.length ?? 0)
    })
    const followerCollectionRef = query(ref, where('follower_id', '==', uid))
    onSnapshot(followerCollectionRef, querySnapshot => {
      setFollowers(querySnapshot.docs.length ?? 0)
    })
  }, [location.pathname])

  const onClickFollow = useCallback(() => {
    navigate(`/account/${uid}/follows`)
  }, [])

  const onClickFollower = useCallback(() => {
    navigate(`/account/${uid}/followers`)
  }, [])

  return {
    followers,
    follows,
    onClickFollow,
    onClickFollower,
  }
}
