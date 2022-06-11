import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'components/redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const params = useParams<{ uid: string }>()
  const [platforms, setPlatforms] = useState<number[]>([])

  const fetchPlatforms = async () => {
    const uid = params.uid ? params.uid : user!.uid
    const ref = doc(db, 'users', uid)
    const mySnap = await getDoc(ref)
    await setPlatforms(mySnap.data()?.platforms || [])
  }

  useEffect(() => {
    fetchPlatforms()
  }, [])

  return {
    platforms,
  }
}
