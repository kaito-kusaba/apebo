import { CancelIconGrey } from 'components/atoms/Icon'
import React from 'react'
import { useStyles } from './style'

type Props = {
  label: string
  onClick: () => void
}

export default React.memo(function AuthModalHeader({ label, onClick }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <button className={styles.cancelButton} onClick={onClick}>
        <img className={styles.cancelImg} src={CancelIconGrey} alt="" />
      </button>
    </div>
  )
})
