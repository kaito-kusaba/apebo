import React from 'react'
import ChatContentList from 'components/organisms/ListItems/ChatContentList'
import { useStyles } from './style'
import ChatInput from 'components/molecules/Input/Chat'

export default React.memo(function TalkContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <ChatContentList />
      <div className={styles.input}>
        <ChatInput />
      </div>
    </div>
  )
})
