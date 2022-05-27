import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export function useInjection() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<DocumentData[]>([])
  const { user } = useSelector(({ user }: RootState) => user)
  const postsTemp: DocumentData[] = []

  useEffect(() => {
    const postsCollectionRef = query(collection(db, 'posts'), orderBy('created_at', 'desc'))
    onSnapshot(postsCollectionRef, querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().user_id === user!.uid) {
          postsTemp.push({ id: doc.id, ...doc.data() })
        }
      })
    })
    setPosts(postsTemp)
  }, [])

  const onClick = useCallback(() => {
    navigate('/')
  }, [])

  return {
    posts,
    onClick,
  }
}
