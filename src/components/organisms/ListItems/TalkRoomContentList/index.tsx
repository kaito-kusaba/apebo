import TalkRoomContent from 'components/organisms/ListItems/TalkRoomContent'
import React from 'react'
import { DocumentData } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

type Props = {
  data: DocumentData[]
}

export default function TalkRoomContentList({ data }: Props) {
  const { user } = useSelector(({ user }: RootState) => user)

  return (
    <div>
      {data.map(data => {
        return (
          <TalkRoomContent
            uid={data.talk_users.find((name: string) => name !== user!.uid)}
            key={data.room_id}
            roomId={data.room_id}
          />
        )
      })}
    </div>
  )
}
