import { AddImageIconGray, SendIconGray } from 'components/atoms/Icon'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import TalkMessageContentList from 'components/organisms/ListItems/TalkMessageContentList'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default React.memo(function TalkContainer() {
  const styles = useStyles()
  const { messages, data, text, onChangeText, onKeyDown, textAreaRef, onClickAddImage, onClickSend } = useInjection()

  const ref = document.getElementById('messageContainer')
  ref?.scrollIntoView(false)

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <ScreenLabel label={`${data?.username ?? '匿名'}さんとのトークルーム`} width={1202} noAvailableUid />
      </div>
      <div id="messageContainer">
        <TalkMessageContentList messages={messages} />
      </div>
      <div className={styles.inputContainer}>
        <img src={AddImageIconGray} alt="" className={styles.addImage} onClick={onClickAddImage} />
        <textarea
          maxLength={800}
          onChange={onChangeText}
          value={text}
          onKeyDown={onKeyDown}
          placeholder={`${data?.unique_id}へメッセージを送信`}
          className={styles.input}
          ref={textAreaRef}
          rows={1}
        />
        <img src={SendIconGray} alt="" className={styles.sendImage} onClick={onClickSend} />
      </div>
    </div>
  )
})
