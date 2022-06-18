import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { RootState } from 'components/redux'

export function useInjection() {
  const { userData } = useSelector(({ user }: RootState) => user)
  const params = useParams<{ uid: string }>()
  const [platforms, setPlatforms] = useState<number[]>([])
  const location = useLocation()

  const fetchPlatforms = async () => {
    if (params.uid === userData.uniqueId) {
      setPlatforms(userData.platforms || [])
    } else {
      const ref = doc(db, 'users', params.uid!)
      const mySnap = await getDoc(ref)
      setPlatforms(mySnap.data()?.platforms || [])
    }
  }

  useEffect(() => {
    fetchPlatforms()
  }, [location.pathname])

  return {
    platforms,
  }
}
