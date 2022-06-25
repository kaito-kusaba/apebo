import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'

export function useInjection() {
  const [posts, setPosts] = useState<DocumentData[]>([])

  useEffect(() => {
    const postsCollectionRef = query(collection(db, 'posts'), orderBy('created_at', 'desc'))
    onSnapshot(postsCollectionRef, querySnapshot => {
      setPosts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  return {
    posts,
  }
}
