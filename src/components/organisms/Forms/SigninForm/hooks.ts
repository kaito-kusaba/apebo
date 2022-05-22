import { useCallback, useEffect, useState } from 'react'
import { auth, provider } from 'libs/firebase'
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ValidationType } from 'types/ValidationType'
import { validatePassword } from 'utils/validator'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/User'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [validation, setValidation] = useState<ValidationType>('blank')
  const [errorText, setErrorText] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  const enterKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      onPressSubmit()
    }
  }

  useEffect(() => {
    setValidation(validatePassword(password))
  }, [password])

  const onClickCancel = useCallback(() => {
    console.log('close')
  }, [])

  const onClickGoogleButton = useCallback(() => {
    signInWithRedirect(auth, provider).then(() => {
      navigate('/')
    })
  }, [])

  const onPressSubmit = useCallback(() => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user
          dispatch(actions.setUser(user))
          if (user.displayName) {
            navigate('/')
          } else {
            navigate('/attr/username')
          }
        })
        .catch(error => {
          //console.log(`signInError --- ${error}`) 確認用
          switch (error.code) {
            case 'auth/email-already-in-use':
              setErrorText('このメールアドレスは既に使用されています。')
              break
            case 'auth/invalid-email':
              setErrorText('このメールアドレスは登録されていません。')
              break
            case 'auth/weak-password':
              setErrorText('パスワードが適切ではありません。')
              break
            case 'auth/user-disabled':
              setErrorText('アカウントが無効です。')
              break
            case 'auth/user-not-found':
              setErrorText('パスワードまたはメールアドレスが違います。')
              break
            case 'auth/wrong-password':
              setErrorText('パスワードまたはメールアドレスが違います。')
          }
        })
    })
  }, [email, password])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
    onClickCancel,
    validation,
    onClickGoogleButton,
    errorText,
    enterKeyPress,
  }
}
