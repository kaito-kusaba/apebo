import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function useInjection() {
  const params = useParams()
  const followerTemp: string[] = []
  const [followerList, setFollowerList] = useState<string[]>([])

  const fetchFollowerData = () => {
    const ref = collection(db, 'follows')
    const followersCollectionRef = query(ref, where('follower_id', '==', params.uid))
    onSnapshot(followersCollectionRef, querySnapshot => {
      querySnapshot.forEach(follower => {
        followerTemp.push(follower.data()?.follow_id)
      })
      setFollowerList(followerTemp)
    })
  }

  useEffect(() => {
    fetchFollowerData()
  }, [])

  return {
    followerList,
  }
}
