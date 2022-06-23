import React from 'react'
import { useInjection } from './hooks'
import EmailInput from 'components/molecules/Input/Email'
import PasswordInput from 'components/molecules/Input/Password'
import AuthButton from 'components/molecules/Button/Auth'
import AuthModalHeader from 'components/organisms/Header/AuthModal'
import { useStyles } from './style'
import GoogleAuthButton from 'components/molecules/Button/Auth/Google'
import ValidateLabel from 'components/molecules/Label/ValidateLabel'
import Modal from 'react-modal'

export default function SigninForm() {
  const styles = useStyles()
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onPressSubmit,
    validation,
    onClickGoogleButton,
    errorText,
    enterKeyPress,
    onCloseModal,
    isOpenSignin,
    onClickSignUp,
    onClickForgotPassword,
  } = useInjection()

  return (
    <Modal
      isOpen={isOpenSignin}
      onRequestClose={onCloseModal}
      appElement={document.getElementById('root') as HTMLElement}
      className={styles.container}
      overlayClassName={styles.overlay}>
      <div onKeyDown={enterKeyPress}>
        <AuthModalHeader label="サインイン" onClick={onCloseModal} />
        <EmailInput
          type="default"
          value={email}
          onChange={onChangeEmail}
          style={styles.emailInput}
          placeholder="メールアドレス"
        />

        <PasswordInput errorText={errorText} type="default" value={password} onChange={onChangePassword} />

        <ValidateLabel validation={validation} />
        <span className={styles.invalid}>{errorText}</span>
        <p className={styles.forgot}>
          パスワードを忘れた方は
          <button onClick={onClickForgotPassword} className={styles.forgotLink}>
            こちら
          </button>
        </p>
        <AuthButton label="サインイン" onClick={onPressSubmit} validation={validation} style={styles.signInButton} />
        <GoogleAuthButton onClick={onClickGoogleButton} style={styles.googleButton} />
        <p className={styles.signUp}>
          アカウントをお持ちでない方は
          <br />
          <button onClick={onClickSignUp} className={styles.signUpLink}>
            新規登録(無料)
          </button>
        </p>
      </div>
    </Modal>
  )
}
