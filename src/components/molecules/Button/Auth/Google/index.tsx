import { GoogleIcon } from 'components/atoms/Icon'
import React from 'react'
import { useStyles } from './style'

interface Props {
  style?: string
}

export default React.memo(function GoogleAuthButton({ style }: Props) {
  const styles = useStyles()
  return (
    <button className={`${styles.container} ${style}`}>
      <img className={styles.googleIcon} src={GoogleIcon} alt="" />
      <span className={styles.label}>Googleで続ける</span>
    </button>
  )
})
