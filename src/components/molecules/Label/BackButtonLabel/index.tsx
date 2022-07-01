import { LeftArrowIconWhite } from 'components/atoms/Icon'
import { useStyles } from './style'
import React from 'react'
import { useInjection } from './hooks'

type Props = {
  label: string
}

export default function BackButtonLabel({ label }: Props) {
  const styles = useStyles()
  const { onClick } = useInjection()

  return (
    <div className={styles.container}>
      <img src={LeftArrowIconWhite} alt="" className={styles.img} onClick={onClick} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
