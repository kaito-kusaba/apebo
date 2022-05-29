import { useStyles } from './style'
import React from 'react'

type Props = {
  onClick?: () => void
  disabled?: boolean
}

export default React.memo(function PostButton({ onClick, disabled }: Props) {
  const styles = useStyles({ disabled })

  return (
    <div className={styles.container}>
      <button disabled={disabled} className={styles.postButton()} onClick={onClick}></button>
    </div>
  )
})
