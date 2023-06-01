import { DocumentData } from 'firebase/firestore'
import React from 'react'
import TalkMessageContent from 'components/organisms/ListItems/TalkMessageContent'
import { useStyles } from './style'

type Props = {
  messages: DocumentData[]
}

export default function TalkMessageContentList({ messages }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      {/*TODO: 持ってくるデータは20個に制限*/}
      {messages.map(message => {
        return (
          <TalkMessageContent
            uid={message.user_id}
            key={message.message_id}
            message={message.content}
            time={message.created_at}
          />
        )
      })}
    </div>
  )
}
