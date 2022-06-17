import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

export function useInjection() {
  const location = useLocation()
  const { posts } = useSelector(({ accountPosts }: RootState) => accountPosts)
  const { user } = useSelector(({ user }: RootState) => user)
  const params = useParams()
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    if (location.pathname === `/account/${user!.uid}`) {
      const f = async () => {
        const userRef = doc(db, 'users', user!.uid)
        const userSnap = await getDoc(userRef)
        setUsername(userSnap.data()?.username || '匿名さん')
      }
      f()
    }
    if (params.uid) {
      const f = async () => {
        const userRef = doc(db, 'users', params.uid!)
        const userSnap = await getDoc(userRef)
        setUsername(userSnap.data()?.username || '匿名さん')
      }
      f()
    }
  }, [params])

  return {
    path: location.pathname,
    posts,
    username,
    params,
  }
}
