import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const [talkRooms, setTalkRooms] = useState<string[]>([])

  const initialize = async () => {
    if (user) {
      const ref = doc(db, 'users', user.uid)
      const snap = await getDoc(ref)
      const data = snap.data()?.talk_rooms
      setTalkRooms(data)
    }
  }

  useEffect(() => {
    initialize()
  }, [])

  return {
    talkRooms,
  }
}
