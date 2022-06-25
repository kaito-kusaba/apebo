import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

export function useInjection() {
  const { posts } = useSelector(({ accountPosts }: RootState) => accountPosts)
  const [username, setUsername] = useState<string>('')
  const [searchParams] = useSearchParams()
  const uid = searchParams.get('user')
  const params = useParams<{ uid: string }>()

  const fetchUserData = async () => {
    if (uid || params.uid) {
      const userRef = doc(db, 'users', uid ?? params.uid!)
      const userSnap = await getDoc(userRef)
      setUsername(userSnap.data()?.username || '匿名さん')
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return {
    posts,
    username,
  }
}
