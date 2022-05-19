import { GoogleIcon } from 'components/atoms/Icon'
import React from 'react'
import { useStyles } from './style'

interface Props {
  onClick: () => void
  style?: string
}

export default React.memo(function GoogleAuthButton({ style, onClick }: Props) {
  const styles = useStyles()

  return (
    <button onClick={onClick} className={`${styles.container} ${style}`}>
      <img className={styles.googleIcon} src={GoogleIcon} alt="" />
      <span className={styles.label}>Googleで続ける</span>
    </button>
  )
})
