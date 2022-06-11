import { AddImageIconGray, SendIconGray, SmileIconGray } from 'components/atoms/Icon'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default function ChatInput() {
  const styles = useStyles()
  const { onChangeText, text } = useInjection()
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <img className={styles.addImageIcon} src={AddImageIconGray} alt="" />
      </button>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={onChangeText}
          placeholder={`partner.nameへメッセージを送信`}
        />
        <button className={styles.emojiButton}>
          <img className={styles.smileIcon} src={SmileIconGray} alt="" />
        </button>
      </div>
      <button className={styles.button}>
        <img className={styles.sendIcon} src={SendIconGray} alt="" />
      </button>
    </div>
  )
}
