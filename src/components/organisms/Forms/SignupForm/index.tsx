import React from 'react'
import { Link } from 'react-router-dom'
import { useInjection } from './hooks'
import AuthModalHeader from 'components/organisms/Header/AuthModal'
import EmailInput from 'components/molecules/Input/Email'
import PasswordInput from 'components/molecules/Input/Password'
import { useStyles } from './style'
import ValidateLabel from 'components/molecules/Label/ValidateLabel'
import AuthButton from 'components/molecules/Button/Auth'
import GoogleAuthButton from 'components/molecules/Button/Auth/Google'

export default function SignupForm() {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onPressSubmit,
    onClickCancel,
    validation,
    onClickGoogleButton,
  } = useInjection()
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <AuthModalHeader label="新規登録(無料)" onClick={onClickCancel} />
      <EmailInput value={email} onChange={onChangeEmail} style={styles.emailInput} />
      <PasswordInput value={password} onChange={onChangePassword} />
      <ValidateLabel validation={validation} style={styles.validationLabel} />
      <AuthButton label="新規登録(無料)" onClick={onPressSubmit} validation={validation} style={styles.signInButton} />
      <GoogleAuthButton onClick={onClickGoogleButton} style={styles.googleButton} />
      <p className={styles.signUp}>
        すでにアカウントをお持ちの方は
        <br />
        <Link to="/auth/signin" className={styles.signUpLink}>
          サインイン
        </Link>
      </p>
    </div>
  )
}
