import { useCallback, useEffect, useState } from 'react'
import { auth } from 'libs/firebase'
import { updateEmail } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useAlert } from 'components/molecules/Alert'

export function useInjection() {
  const [errorText, setErrorText] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)
  const [disabled, setDisabled] = useState<boolean>(true)
  const showAlert = useAlert()

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

  const onClick = useCallback(() => {
    updateEmail(auth.currentUser!, email)
      .then(() => {
        setErrorText('')
        showAlert({ text: 'メールアドレスを変更しました。' })
      })
      .catch((e: any) => {
        console.log(e)
        switch (e.code) {
          case 'auth/email-already-in-use':
            setEmail('')
            setErrorText('このメールアドレスは既に使用されています。')
            break
          case 'auth/invalid-email':
            setEmail('')
            setErrorText('このメールアドレスは無効です。')
            break
          case 'auth/requires-recent-login':
            setEmail('')
            setErrorText('認証情報が古いです。再度サインインしてください。')
            break
        }
      })
  }, [email, errorText])

  const enterKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      onClick()
    }
  }

  return {
    onChangeEmail,
    onClick,
    user,
    email,
    errorText,
    enterKeyPress,
    disabled,
  }
}
