import { SmileIconYellow } from 'components/atoms/Icon'
import { AddImageIconYellow } from 'components/atoms/Icon'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import React from 'react'
import Modal from 'react-modal'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default React.memo(function PostModal() {
  const styles = useStyles()
  const { text, isOpen, onChangeText, onClickAddImage, onClickPostButton, onClickSmileIcon, onClose, textAreaRef } =
    useInjection()

  return (
    <Modal
      isOpen={isOpen}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.modalContainer}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}>
      <div className={styles.header}>
        <UserIcon disabled size={46} style={styles.userIcon} />
        <UserName hideUid />
      </div>
      <textarea
        onChange={onChangeText}
        maxLength={200}
        placeholder="今から一緒にゲームしない？"
        className={styles.textArea}
        value={text}
        ref={textAreaRef}
      />
      <div className={styles.textAreaInfoContainer}>
        <div className={styles.yellowButtons}>
          <img className={styles.addImage} src={AddImageIconYellow} alt="" onClick={onClickAddImage} />
          <img className={styles.smileIcon} src={SmileIconYellow} alt="" onClick={onClickSmileIcon} />
        </div>
        <div className={styles.postButtonContainer}>
          <span className={styles.textAreaLength}>{text.length}/200</span>
          <span className={styles.line} />
          <button onClick={onClickPostButton} className={styles.postButton}>
            投稿
          </button>
        </div>
      </div>
    </Modal>
  )
})
