import { RootState } from 'components/redux'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from 'libs/firebase'

type Props = {
  uid?: string
}

export function useInjection({ uid }: Props) {
  const { user } = useSelector(({ user }: RootState) => user)
  const location = useLocation()

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

  return {
    onClickOther,
  }
}
