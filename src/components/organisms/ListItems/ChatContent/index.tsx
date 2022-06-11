import Time from 'components/atoms/Time'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ChatContentDisplay from 'components/organisms/ChatContentDisplay'
import { Timestamp } from 'firebase/firestore'
import React from 'react'

type Props = {
  roomId: string
  content: string
  time: Timestamp
  uid: string
  isShown: boolean
}
export default React.memo(function ChatContent({ content, time, uid, isShown }: Props) {
  if (isShown) {
    return (
      <div>
        <div>
          <UserIcon size={46} uid={uid} />
          <UserName uid={uid} />
          <Time time={time} />
        </div>
        <ChatContentDisplay content={content} />
      </div>
    )
  } else {
    return <></>
  }
})
