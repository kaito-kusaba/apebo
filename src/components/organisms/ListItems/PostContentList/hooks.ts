import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore'

export function useInjection() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<DocumentData[]>([])

  useEffect(() => {
    const postsCollectionRef = query(collection(db, 'posts'), orderBy('created_at', 'desc'))
    getDocs(postsCollectionRef).then(querySnapshot => {
      setPosts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const onClick = useCallback(() => {
    navigate('/')
  }, [])

  return {
    posts,
    onClick,
  }
}
