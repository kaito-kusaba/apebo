import React from 'react'
import { useStyles } from './style'
import Click from 'components/molecules/Button/Click'
import { useInjection } from './hooks'
import Password from 'components/molecules/Input/Password'
import ValidateLabel from 'components/molecules/Label/ValidateLabel'
import SettingsLabel from 'components/molecules/Label/SettingsLabel'

export default React.memo(function ChangePasswordContainer() {
  const {
    onChangePassword,
    onClick,
    onChangePasswordConfirm,
    password,
    passwordConfirm,
    validation,
    disabled,
    errorText,
  } = useInjection()
  const styles = useStyles({ errorText })

  return (
    <div className={styles.container}>
      <SettingsLabel label="パスワード再設定" />
      <span className={styles.newPassword}>
        新しいパスワード<span className={styles.errorTextMessage}>{errorText}</span>
      </span>
      <div className={styles.inputPasswordContainer}>
        <Password
          type="border"
          value={password}
          onChange={onChangePassword}
          placeholder="新しいパスワードを入力"
          errorText={errorText}
        />
      </div>
      <Password
        type="border"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
        placeholder="新しいパスワードを入力(確認)"
        errorText={errorText}
      />
      <ValidateLabel validation={validation} className={styles.validate} />
      <Click onClick={onClick} disabled={disabled} />
    </div>
  )
})
