import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function useInjection() {
  const [label, setLabel] = useState<string>('')
  const followTemp: string[] = []
  const followerTemp: string[] = []
  const [followerList, setFollowerList] = useState<string[]>([])
  const [followList, setFollowList] = useState<string[]>([])
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  const fetchFollowData = async () => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follow_id', '==', params.uid))
    onSnapshot(followsCollectionRef, querySnapshot => {
      querySnapshot.forEach(follow => {
        followTemp.push(follow.data()?.follower_id)
      })
      setFollowList(followTemp)
    })
  }

  const fetchFollowerData = async () => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follower_id', '==', params.uid))
    onSnapshot(followsCollectionRef, querySnapshot => {
      querySnapshot.forEach(follower => {
        followerTemp.push(follower.data()?.follow_id)
      })
      setFollowerList(followerTemp)
    })
  }

  useEffect(() => {
    fetchFollowData()
    fetchFollowerData()
  }, [])

  useEffect(() => {
    setLabel(location.pathname.match(/follows/) ? 'フォロー中' : 'フォロワー')
  }, [location])

  const onClickFollow = useCallback(() => {
    navigate(`/account/${params.uid}/follows`)
  }, [])

  const onClickFollower = useCallback(() => {
    navigate(`/account/${params.uid}/followers`)
  }, [])

  return {
    onClickFollower,
    onClickFollow,
    label,
    followList,
    followerList,
  }
}
