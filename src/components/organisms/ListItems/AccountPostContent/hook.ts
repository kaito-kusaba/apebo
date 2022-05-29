import { RootState } from 'components/redux'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from 'libs/firebase'

type Props = {
  uid?: string
}

export function useInjection({ uid }: Props) {
  const { user } = useSelector(({ user }: RootState) => user)
  const location = useLocation()
  const navigate = useNavigate()

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

  const onClickMessage = useCallback(e => {
    e.stopPlopagation()
    navigate('/talk/:room_id')
  }, [])

  return {
    onClickOther,
    onClickMessage,
  }
}
