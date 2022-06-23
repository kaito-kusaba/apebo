import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'

export function useInjection() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [posts, setPosts] = useState<DocumentData[]>([])
  const { user } = useSelector(({ user }: RootState) => user)

  useEffect(() => {
    const postsCollectionRef = query(collection(db, 'posts'), orderBy('created_at', 'desc'))
    onSnapshot(postsCollectionRef, querySnapshot => {
      setPosts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const onClick = useCallback(() => {
    if (user?.uid) {
      navigate('/')
    } else {
      dispatch(actions.setSignInModal(true))
    }
  }, [])

  return {
    posts,
    onClick,
  }
}
