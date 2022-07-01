import { LeftArrowIconWhite } from 'components/atoms/Icon'
import { useStyles } from './style'
import React from 'react'

type Props = {
  label: string
  onClick: () => void
}

export default function BackButtonLabel({ label, onClick }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <img src={LeftArrowIconWhite} alt="" className={styles.img} onClick={onClick} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
