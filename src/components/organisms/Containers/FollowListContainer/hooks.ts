import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function useInjection() {
  const params = useParams()
  const followTemp: string[] = []
  const [followList, setFollowList] = useState<string[]>([])

  useEffect(() => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follow_id', '==', params.uid))
    onSnapshot(followsCollectionRef, querySnapshot => {
      querySnapshot.forEach(follow => {
        followTemp.push(follow.data()?.follower_id)
      })
      setFollowList(followTemp)
    })
  }, [])

  return {
    followList,
  }
}
