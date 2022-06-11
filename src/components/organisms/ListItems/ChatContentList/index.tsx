import { DocumentData } from 'firebase/firestore'
import React from 'react'
import ChatContent from '../ChatContent'

export default function ChatContentList() {
  //   const [chats, setChats] = useState<DocumentData[]>([])
  const chats: DocumentData[] = []

  return (
    <>
      {chats.map(chat => {
        return (
          <ChatContent
            key={chat.id}
            roomId={chat.room_id}
            content={chat.content}
            uid={chat.uid}
            time={chat.created_at}
            isShown={chat.isShown}
          />
        )
      })}
    </>
  )
}
