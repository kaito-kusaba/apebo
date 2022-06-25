import React from 'react'
import { useInjection } from './hooks'
import AuthModalHeader from 'components/organisms/Header/AuthModal'
import EmailInput from 'components/molecules/Input/Email'
import PasswordInput from 'components/molecules/Input/Password'
import { useStyles } from './style'
import ValidateLabel from 'components/molecules/Label/ValidateLabel'
import AuthButton from 'components/molecules/Button/Auth'
import GoogleAuthButton from 'components/molecules/Button/Auth/Google'
import Modal from 'react-modal'

export default function SignupForm() {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onPressSubmit,
    validation,
    onClickGoogleButton,
    enterKeyPress,
    errorText,
    isOpenSignup,
    onCloseModal,
    onClickSignIn,
  } = useInjection()
  const styles = useStyles()

  return (
    <Modal
      isOpen={isOpenSignup}
      onRequestClose={onCloseModal}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.container}
      overlayClassName={styles.overlay}>
      <div onKeyDown={enterKeyPress}>
        <AuthModalHeader label="新規登録(無料)" onClick={onCloseModal} />
        <EmailInput
          type="default"
          value={email}
          onChange={onChangeEmail}
          style={styles.emailInput}
          placeholder="メールアドレス"
        />
        <PasswordInput errorText={errorText} type="default" value={password} onChange={onChangePassword} />
        <ValidateLabel validation={validation} style={styles.validationLabel} />
        <span className={styles.invalid}>{errorText}</span>
        <AuthButton
          label="新規登録(無料)"
          onClick={onPressSubmit}
          validation={validation}
          style={styles.signInButton}
        />
        <GoogleAuthButton onClick={onClickGoogleButton} style={styles.googleButton} />
        <p className={styles.signUp}>
          すでにアカウントをお持ちの方は
          <br />
          <button onClick={onClickSignIn} className={styles.signUpLink}>
            サインイン
          </button>
        </p>
      </div>
    </Modal>
  )
}
