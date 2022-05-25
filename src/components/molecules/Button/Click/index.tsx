import React from 'react'
import { useStyles } from './style'

type Props = {
  onClick?: () => void
  clicked?: boolean
}

export default React.memo(function EmailButton({ onClick, clicked }: Props) {
  const styles = useStyles({ clicked })

  return (
    <button className={styles.changeEmailButton()} onClick={onClick}>
      変更する
    </button>
  )
})
