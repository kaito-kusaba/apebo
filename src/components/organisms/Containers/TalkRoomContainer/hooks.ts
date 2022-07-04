import { RootState } from 'components/redux'
import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const [talkRooms, setTalkRooms] = useState<DocumentData[]>([])
  const talkRoomsTemp: DocumentData[] = []

  const fetchTalkRoomData = async () => {
    const ref = collection(db, 'talk_rooms')
    const talkRoomsCollectionRef = query(ref, orderBy('update_at', 'desc'))
    onSnapshot(talkRoomsCollectionRef, querySnapshot => {
      querySnapshot.forEach(room => {
        if (room.data()?.talk_users.includes(user!.uid)) {
          if (room.data()?.messages.length <= 0) {
            if (room.data()?.created_user === user!.uid) {
              if (!talkRoomsTemp.find(talk => talk.room_id === room.data()?.room_id)) {
                talkRoomsTemp.push({ ...room.data() })
              }
            }
          } else {
            if (!talkRoomsTemp.find(talk => talk.room_id === room.data()?.room_id)) {
              talkRoomsTemp.push({ ...room.data() })
            }
          }
        }
      })
      setTalkRooms(talkRoomsTemp)
    })
  }

  useEffect(() => {
    fetchTalkRoomData()
  }, [])

  return {
    talkRooms,
    user,
  }
}
