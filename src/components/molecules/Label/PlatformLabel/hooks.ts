import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'components/redux'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const { userData } = useSelector(({ user }: RootState) => user)
  const [platforms, setPlatforms] = useState<number[]>([])
  const location = useLocation()

  const fetchPlatforms = async () => {
    if (uid === userData.uniqueId) {
      setPlatforms(userData.platforms || [])
    } else {
      const ref = doc(db, 'users', uid)
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
