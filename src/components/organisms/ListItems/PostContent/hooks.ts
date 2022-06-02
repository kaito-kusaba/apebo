import { RootState } from 'components/redux'
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { deleteDoc, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from 'libs/firebase'

type Props = {
  uid?: string
}

export function useInjection({ uid }: Props) {
  const { user } = useSelector(({ user }: RootState) => user)
  const location = useLocation()
  const navigate = useNavigate()
  const friendUserRef = doc(db, 'users', uid!)
  const myRef = doc(db, 'users', user!.uid)
  const [following, setFollowing] = useState<boolean>(false)

  const onClickOther = useCallback(async docId => {
    if (user!.uid === uid) {
      await deleteDoc(doc(db, 'posts', docId))
      if (location.pathname === '/account') {
        window.location.reload()
      }
    } else {
      alert('miss')
    }
  }, [])

  const onClickFollow = async () => {
    if (user?.uid !== uid) {
      if (!following) {
        updateDoc(friendUserRef, {
          followers: arrayUnion(user?.uid),
        })
        updateDoc(myRef, {
          follows: arrayUnion(uid),
        })
        setFollowing(true)
      } else {
        updateDoc(friendUserRef, {
          followers: arrayRemove(user?.uid),
        })
        updateDoc(myRef, {
          follows: arrayRemove(uid),
        })
        setFollowing(false)
      }
    }
  }

  const onClickMessage = useCallback((e: any) => {
    e.stopPropagation()
    navigate('/talk/:room_id')
  }, [])

  return {
    onClickOther,
    onClickMessage,
    onClickFollow,
  }
}
