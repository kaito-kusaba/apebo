import { useCallback, useEffect, useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const auth = getAuth()
  const [errorText, setErrorText] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const navigate = useNavigate()

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
        alert('メールを送信。')
      })
      .catch(error => {
        //TODO: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth ここ見て必要そうなエラーコードあったら増やしていく。
        switch (error.code) {
          case 'auth/invalid-email':
            setErrorText('このメールアドレスは無効です。')
            break
          case 'auth/user-not-found':
            setErrorText('このメールアドレスは使用されていません。')
            break
        }
      })
  }, [email])

  return {
    email,
    onChangeEmail,
    onPressSubmit,
    errorText,
    disabled,
    onClickBackButton,
  }
}
