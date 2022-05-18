import { GoogleIcon } from 'components/atoms/Icon'
import { signInWithRedirect } from 'firebase/auth'
import { auth, provider } from 'libs/firebase'
import React, { useCallback } from 'react'
import { useStyles } from './style'

interface Props {
  style?: string
}

export default React.memo(function GoogleAuthButton({ style }: Props) {
  const styles = useStyles()

  const onClick = useCallback(() => {
    signInWithRedirect(auth, provider)
  }, [])

  return (
    <button onClick={onClick} className={`${styles.container} ${style}`}>
      <img className={styles.googleIcon} src={GoogleIcon} alt="" />
      <span className={styles.label}>Googleで続ける</span>
    </button>
  )
})
