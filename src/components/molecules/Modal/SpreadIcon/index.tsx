import React from 'react'
import Modal from 'react-modal'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default React.memo(function SpreadIconModal() {
  const { isOpenSpreadIcon, spreadIconSrc, onCloseModal } = useInjection()
  const styles = useStyles()

  return (
    <Modal
      isOpen={isOpenSpreadIcon}
      onRequestClose={onCloseModal}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.container}
      overlayClassName={styles.overlay}>
      <img src={spreadIconSrc} alt="" className={styles.spreadIcon} />
    </Modal>
  )
})
