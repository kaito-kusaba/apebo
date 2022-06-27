//import { useInjection } from './hooks'
import React from 'react'
import { useStyles } from './style'

type Props = {
  label?: string
  src?: string
  onClick?: () => void
  checked?: boolean
}

export default React.memo(function CheckButton({ label, src, onClick, checked }: Props) {
  const styles = useStyles({ checked })

  if (!src) {
    return (
      <button className={styles.button()} onClick={onClick}>
        <span className={styles.text()}>{label}</span>
      </button>
    )
  } else {
    return (
      <button className={styles.button()} onClick={onClick}>
        <img src={src} className={styles.img()} alt="" />
      </button>
    )
  }
})
