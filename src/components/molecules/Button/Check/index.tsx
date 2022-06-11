//import { useInjection } from './hooks'
import React from 'react'
import { useStyles } from './style'

type Props = {
  label: string
  onClick?: () => void
  checked?: boolean
}

export default React.memo(function CheckButton({ label, onClick, checked }: Props) {
  const styles = useStyles({ checked })

  return (
    <button className={styles.button()} onClick={onClick}>
      <span className={styles.text()}>{label}</span>
    </button>
  )
})
