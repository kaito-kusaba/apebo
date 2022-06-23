import { useCallback, useEffect, useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useAlert } from 'components/molecules/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const auth = getAuth()
  const [errorText, setErrorText] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const dispatch = useDispatch()
  const showAlert = useAlert()
  const { isOpenPasswordReset } = useSelector(({ modal }: RootState) => modal)

  const onClickBackButton = useCallback(() => {
    dispatch(actions.setPasswordResetModal(false))
    dispatch(actions.setSignUpModal(false))
    dispatch(actions.setSignInModal(true))
  }, [])

  useEffect(() => {
    setDisabled(!(email.length > 4) || false)
  }, [email])

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])

  const onPressSubmit = useCallback(() => {
    const actionCodeSettings = {
      url: `${process.env.REACT_APP_BASEURL}/auth/signin`,
    }
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        showAlert({ text: 'メールに再設定用リンクを送信しました' })
      })
      .catch(error => {
        //TODO: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth ここ見て必要そうなエラーコードあったら増やしていく。
        switch (error.code) {
          case 'auth/invalid-email':
            setErrorText('このメールアドレスは無効です')
            break
          case 'auth/user-not-found':
            setErrorText('このメールアドレスは使用されていません')
            break
          default:
            showAlert({ type: 'error', text: '時間をおいて再度お試しください' })
            break
        }
      })
  }, [email])

  const onKeyDown = useCallback(e => {
    if (e.keyCode === 13) {
      onPressSubmit()
    }
  }, [])

  const onCloseModal = useCallback(() => {
    dispatch(actions.setPasswordResetModal(false))
  }, [])

  return {
    email,
    onChangeEmail,
    onPressSubmit,
    errorText,
    disabled,
    onClickBackButton,
    onKeyDown,
    isOpenPasswordReset,
    onCloseModal,
  }
}
