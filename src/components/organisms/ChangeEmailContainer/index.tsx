import React, { useCallback, useState } from 'react'
import { useStyles } from './style'
import Click from 'components/molecules/Button/Click'

export default React.memo(function ChangeEmailContainer() {
  const [clicked, setClicked] = useState(false)
  const styles = useStyles()

  const onClick = useCallback(() => {
    setClicked(!clicked)
  }, [clicked])

  return (
    <div className={styles.container}>
      <span className={styles.top}>メールアドレス変更</span>
      <span className={styles.oldEmail}>現在のメールアドレス</span>
      <span className={styles.inputOldEmail}>nevaeh.simmons@example.com</span>
      <span className={styles.newEmail}>新しいメールアドレス</span>
      <input type="email" className={styles.inputNewEmail} placeholder="新しいメールアドレスを入力" />
      <Click onClick={onClick} clicked={clicked} />
    </div>
  )
})
