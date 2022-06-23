import React from 'react'
import type { ActionButtonTypes } from 'types/ActionButtonTypes'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  type: ActionButtonTypes
  uid?: string
  docId?: string
  imgStyle?: string
  buttonStyle?: string
}

export default React.memo(function ActionButton({ type, imgStyle, uid, docId, buttonStyle }: Props) {
  const styles = useStyles()
  const { buttonImageSrc, onMouseToggle, onClickActionButton } = useInjection({
    type,
    docId,
    uid,
  })

  return (
    <button
      onMouseEnter={onMouseToggle}
      onMouseLeave={onMouseToggle}
      onClick={onClickActionButton}
      className={`${styles.actionButton} ${buttonStyle}`}>
      <img src={buttonImageSrc} className={`${styles.actionButtonImageStyle}  ${imgStyle}`} alt="" />
    </button>
  )
})
