import React from 'react'
import { useStyles } from './style'
import Click from 'components/molecules/Button/Click'
import { useInjection } from './hooks'
import { InfoIconRed } from 'components/atoms/Icon'

export default React.memo(function ChangeEmailContainer() {
  const { onChangeEmail, onClick, user, errorText, enterKeyPress, disabled } = useInjection()
  const styles = useStyles({ errorText })

  return (
    <div className={styles.container} onKeyDown={enterKeyPress}>
      <span className={styles.top}>メールアドレス変更</span>
      <span className={styles.oldEmail}>現在のメールアドレス</span>
      <span className={styles.inputOldEmail}>{user?.email}</span>
      <span className={styles.newEmail}>
        新しいメールアドレス<span className={styles.errorTextMessage}>{errorText}</span>
      </span>
      <div className={styles.inputContainer}>
        <input
          type="email"
          className={styles.inputNewEmail()}
          onChange={onChangeEmail}
          placeholder="新しいメールアドレスを入力"
        />
        <img src={InfoIconRed} alt="" className={styles.info()} />
      </div>
      <Click onClick={onClick} disabled={disabled} />
    </div>
  )
})
