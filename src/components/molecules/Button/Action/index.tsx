import React from 'react'
import type { ActionButtonTypes } from 'types/ActionButtonTypes'
import { useInjection } from './hooks'
import { useStyles } from './style'

interface Props {
  type: ActionButtonTypes
  docId: string
  uid: string
}

export default React.memo(function ActionButton({ type, docId, uid }: Props) {
  const styles = useStyles()
  const { buttonImageSrc, onMouseToggle, onClickActionButton } = useInjection({ type, docId, uid })

  return (
    <button
      onMouseEnter={onMouseToggle}
      onMouseLeave={onMouseToggle}
      onClick={onClickActionButton}
      className={`${styles.actionButton} action-buttons action-buttons-${type.toLowerCase()}`}>
      {type === 'Other' ? (
        <img src={buttonImageSrc} className={styles.actionButtonDotsImageStyle} alt="" />
      ) : (
        <img src={buttonImageSrc} className={styles.actionButtonImageStyle} alt="" />
      )}
    </button>
  )
})
