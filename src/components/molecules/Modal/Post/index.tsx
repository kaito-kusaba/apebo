import { SmileIconYellow } from 'components/atoms/Icon'
import { AddImageIconYellow } from 'components/atoms/Icon'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function PostModal() {
  const styles = useStyles()
  const dispatch = useDispatch()
  const { isOpen } = useSelector(({ modal }: RootState) => modal)
  const [text, setText] = useState<string>('')
  const textAreaRef = useResizeTextArea(text)

  const onClose = useCallback(() => {
    dispatch(actions.setModal(false))
  }, [])

  const onChangeText = useCallback(
    e => {
      setText(e.target.value)
    },
    [text],
  )

  function useResizeTextArea(value: string | undefined) {
    const ref = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
      const element = ref.current
      if (!element) {
        return
      }
      const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } = getComputedStyle(element)

      element.style.height = 'auto'
      element.style.height = `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
    }, [value])

    return ref
  }

  const onClickPostButton = () => {
    alert('ボタンおしたぞ')
  }

  const onClickAddImage = () => {
    alert('画像をアップロード')
  }

  const onClickSmileIcon = () => {
    alert('にこちゃんまーく')
  }

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
        ref={textAreaRef}
      />
      <div className={styles.textAreaInfoContainer}>
        <img className={styles.add_Image} src={AddImageIconYellow} alt="" onClick={onClickAddImage} />
        <img className={styles.smileIcon} src={SmileIconYellow} alt="" onClick={onClickSmileIcon} />
        <div>
          <span className={styles.textAreaLength}>{text.length}/200</span>
          <button onClick={onClickPostButton} className={styles.postButton}>
            投稿
          </button>
        </div>
      </div>
    </Modal>
  )
})
