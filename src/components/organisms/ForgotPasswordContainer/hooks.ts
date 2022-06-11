import { useCallback, useEffect, useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'components/molecules/Alert'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const auth = getAuth()
  const [errorText, setErrorText] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const navigate = useNavigate()
  const showAlert = useAlert()

  const onClickBackButton = useCallback(() => {
    navigate('/auth/signin')
  }, [])

  useEffect(() => {
    if (email.length > 4) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
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

  return {
    email,
    onChangeEmail,
    onPressSubmit,
    errorText,
    disabled,
    onClickBackButton,
    onKeyDown,
  }
}
