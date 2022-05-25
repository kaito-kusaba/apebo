import React from 'react'
import { useStyles } from './style'

type Props = {
  onClick?: () => void
  disabled?: boolean
}

export default React.memo(function EmailButton({ onClick, disabled }: Props) {
  const styles = useStyles({ disabled })

  return (
    <div className={styles.container}>
      <button disabled={disabled} className={styles.changeEmailButton()} onClick={onClick}>
        変更する
      </button>
    </div>
  )
})
