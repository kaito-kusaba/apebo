import { doc, DocumentData, onSnapshot } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function useInjection() {
  const params = useParams()
  const [messages, setMessages] = useState<DocumentData[]>([])

  const fetchTalkData = () => {
    const talkRef = doc(db, 'talk_rooms', params.room_id!)
    onSnapshot(talkRef, snapshot => {
      setMessages(snapshot.data()?.messages)
    })
  }

  useEffect(() => {
    fetchTalkData()
  }, [params.room_id])

  return {
    messages,
  }
}
