import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const { userData } = useSelector(({ user }: RootState) => user)
  const navigate = useNavigate()

  const onClick = useCallback(async () => {
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    const result = userData.talkRooms?.filter(
      (x: string) => userSnap.data()?.talk_rooms.filter((y: string) => y === x).length > 0,
    )
    result?.map((id: string) => {
      navigate(`/talk/${id}`)
    })
  }, [])

  return {
    onClick,
  }
}
