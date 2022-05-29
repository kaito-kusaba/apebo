import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/AccountPost'
import { useParams } from 'react-router-dom'

export function useInjection() {
  const dispatch = useDispatch()
  const postsTemp: DocumentData[] = []
  const { user } = useSelector(({ user }: RootState) => user)
  const [posts, setPosts] = useState<DocumentData[]>([])
  const params = useParams<{ uid: string }>()

  let uid: string
  useEffect(() => {
    params.uid ? (uid = params.uid) : (uid = user!.uid)
  }, [params.uid])

  useEffect(() => {
    const postsCollectionRef = query(collection(db, 'posts'), orderBy('created_at', 'desc'))
    onSnapshot(postsCollectionRef, querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().user_id === uid) {
          postsTemp.push({ id: doc.id, ...doc.data() })
        }
      })
      setPosts(postsTemp)
      dispatch(actions.setPosts(postsTemp))
    })
  }, [params.uid, user?.uid])

  const onClick = useCallback(() => {}, [])

  return {
    posts,
    onClick,
  }
}
