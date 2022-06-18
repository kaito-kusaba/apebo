import React, { useCallback, useEffect, useState } from 'react'
import { TrashIconRed, InfoIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/ActionSheet'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useAlert } from '../Alert'

export default function ActionSheet() {
  const [image, setImage] = useState<string>(InfoIconGray)
  const [text, setText] = useState<string>('投稿を運営に報告')
  const actionSheet = useSelector(({ actionSheet }: RootState) => actionSheet)
  const { userData } = useSelector(({ user }: RootState) => user)
  const dispatch = useDispatch()
  const styles = useStyles({ x: actionSheet.data.x, y: actionSheet.data.y, type: actionSheet.data.type })
  const showAlert = useAlert()

  useEffect(() => {
    switch (actionSheet.data.type) {
      case 'report':
        setImage(InfoIconGray)
        setText('投稿を運営に報告')
        break
      case 'delete':
        setImage(TrashIconRed)
        setText('投稿を削除')
        break
    }
  }, [])

  const onClickOverlay = useCallback(() => {
    dispatch(actions.setActionSheetOpen(false))
  }, [])

  const onClick = useCallback(() => {
    switch (actionSheet.data.type) {
      case 'report':
        showAlert({ text: '投稿が運営に報告されました' })
        dispatch(actions.setActionSheetOpen(false))
        break
      case 'delete':
        onDelete()
        dispatch(actions.setActionSheetOpen(false))
        showAlert({ text: '投稿を削除しました' })
        break
    }
  }, [])

  const onDelete = useCallback(async () => {
    if (actionSheet.data.docId) {
      await deleteDoc(doc(db, 'posts', actionSheet.data.docId))
      //自分のアカウントページに居た場合はリロードする
      if (location.pathname === `/account/${userData.uniqueId}`) {
        window.location.reload()
      }
    }
  }, [])

  return (
    <Modal
      isOpen={actionSheet.visible}
      onRequestClose={onClickOverlay}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.container}
      overlayClassName={styles.overlay}>
      <button className={styles.button} onClick={onClick}>
        <img src={image} className={styles.image} alt="" />
        <span className={styles.text()}>{text}</span>
      </button>
    </Modal>
  )
}
