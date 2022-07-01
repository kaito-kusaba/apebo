import { SmileIconYellow, AddImageIconYellow } from 'components/atoms/Icon'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import React from 'react'
import Modal from 'react-modal'
import { useInjection } from './hooks'
import { useStyles } from './style'
import CharacterCounter from 'components/molecules/Counter'

export default React.memo(function PostModal() {
  const {
    user,
    text,
    isOpen,
    onChangeText,
    onClickAddImage,
    onClickPostButton,
    onClickSmileIcon,
    onClose,
    onKeyDown,
    textAreaRef,
    disabled,
  } = useInjection()
  const styles = useStyles({ disabled })

  return (
    <Modal
      isOpen={isOpen}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.modalContainer}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}>
      <div className={styles.header}>
        <UserIcon uid={user!.uid} disabled size={46} style={styles.userIcon} />
        <UserName uid={user!.uid} disabled />
      </div>
      <textarea
        onChange={onChangeText}
        maxLength={200}
        placeholder="今からカジュアルで遊びませんか？&#13;あと2人募集中です！"
        className={styles.textArea}
        value={text}
        ref={textAreaRef}
        onKeyDown={onKeyDown}
      />
      <div className={styles.textAreaInfoContainer}>
        <div className={styles.buttons}>
          <button className={styles.imageButton} onClick={onClickAddImage}>
            <img className={styles.icon} src={AddImageIconYellow} alt="" />
          </button>
          <button className={styles.emojiButton} onClick={onClickSmileIcon}>
            <img className={styles.icon} src={SmileIconYellow} alt="" />
          </button>
        </div>
        <div className={styles.postButtonContainer}>
          <CharacterCounter maxLength={200} length={text.length} size={16} />
          <span className={styles.line} />
          <button onClick={onClickPostButton} className={styles.button()} disabled={disabled}>
            投稿
          </button>
        </div>
      </div>
    </Modal>
  )
})
