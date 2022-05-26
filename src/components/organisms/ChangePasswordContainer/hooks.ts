import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useCallback, useEffect, useState } from 'react'
import { updatePassword } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { validatePassword } from 'utils/validator'
import { ValidationType } from 'types/ValidationType'

export function useInjection() {
  const [password, setPassword] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [validation, setValidation] = useState<ValidationType>('blank')
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (password.length > 5 && passwordConfirm.length > 5) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [password, passwordConfirm])

  useEffect(() => {
    setValidation(validatePassword(password))
  }, [password])

  const clearForm = useCallback(() => {
    setPassword('')
    setPasswordConfirm('')
  }, [])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  const onChangePasswordConfirm = useCallback(e => {
    setPasswordConfirm(e.target.value)
  }, [])

  const onClick = useCallback(() => {
    if (password === passwordConfirm) {
      updatePassword(auth.currentUser!, password)
        .then(() => {
          alert('パスワードを変更しました。')
          setErrorText('')
        })
        .catch((e: any) => {
          switch (e.code) {
            case 'auth/weak-password':
              setErrorText('パスワードが適切ではありません。')
              clearForm()
              break
            case 'auth/wrong-password':
              setErrorText('現在のパスワードが間違っています。')
              clearForm()
              break
            case 'auth/requires-recent-login':
              clearForm()
              setErrorText('認証情報が古いです。再度サインインしてください。')
              break
            case 'auth/weak-password':
              setErrorText('パスワードが適切ではありません。')
              clearForm()
              break
          }
        })
    } else {
      setErrorText('パスワードが一致しません。')
    }
  }, [passwordConfirm, password, errorText])

  const enterKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      onClick()
    }
  }

  return {
    password,
    errorText,
    onChangePasswordConfirm,
    passwordConfirm,
    user,
    onChangePassword,
    onClick,
    enterKeyPress,
    validation,
    disabled,
  }
}
