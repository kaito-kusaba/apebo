import React from 'react'
import { Link } from 'react-router-dom'
import { useInjection } from './hooks'
import EmailInput from 'components/molecules/Input/Email'
import PasswordInput from 'components/molecules/Input/Password'
import AuthButton from 'components/molecules/Button/Auth'
import AuthModalHeader from 'components/organisms/Header/AuthModal'
import { useStyles } from './style'
import GoogleAuthButton from 'components/molecules/Button/Auth/Google'
import ValidateLabel from 'components/molecules/Label/ValidateLabel'

export default function SigninForm() {
  const styles = useStyles()
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onPressSubmit,
    onClickCancel,
    validation,
    onClickGoogleButton,
    errorText,
  } = useInjection()

  return (
    <div className={styles.container}>
      <AuthModalHeader label="サインイン" onClick={onClickCancel} />
      <EmailInput value={email} onChange={onChangeEmail} style={styles.emailInput} />
      <PasswordInput value={password} onChange={onChangePassword} />
      <ValidateLabel validation={validation} />
      <span className={styles.invalid}>{errorText}</span>
      <p className={styles.forgot}>
        パスワードを忘れた方は
        <Link className={styles.forgotLink} to="/auth/forgot/password">
          こちら
        </Link>
      </p>
      <AuthButton label="サインイン" onClick={onPressSubmit} validation={validation} style={styles.signInButton} />
      <GoogleAuthButton onClick={onClickGoogleButton} style={styles.googleButton} />
      <p className={styles.signUp}>
        アカウントをお持ちでない方は
        <br />
        <Link to="/auth/signup" className={styles.signUpLink}>
          新規登録(無料)
        </Link>
      </p>
    </div>
  )
}
