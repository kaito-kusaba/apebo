import React from 'react'
import TalkRoom from '../TalkRoom'
import { useInjection } from './hooks'

export default function TalkRoomsList() {
  const { talkRooms } = useInjection()
  return (
    <>
      {talkRooms.map(talkRoom => {
        return <TalkRoom key={talkRoom} roomId={talkRoom} />
      })}
    </>
  )
}
