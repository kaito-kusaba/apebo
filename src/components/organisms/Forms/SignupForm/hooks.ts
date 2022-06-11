import { useCallback, useEffect, useState } from 'react'
import { auth, db, provider } from 'libs/firebase'
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  setPersistence,
  signInWithRedirect,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/User'
import { validatePassword } from 'utils/validator'
import { ValidationType } from 'types/ValidationType'
import { doc, setDoc } from 'firebase/firestore'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [validation, setValidation] = useState<ValidationType>('blank')
  const [password, setPassword] = useState<string>('')
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

  const onClickGoogleButton = useCallback(() => {
    signInWithRedirect(auth, provider)
  }, [])

  const onPressSubmit = useCallback(() => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user
          const data = {
            unique_id: user.uid,
            username: user.displayName,
            icon: user.photoURL,
          }
          dispatch(actions.setUser(user))
          setDoc(doc(db, 'users', user.uid), data)
          sendEmailVerification(user)
          if (user.displayName) {
            navigate('/')
          } else {
            navigate('/attr/username')
          }
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              setErrorText('このメールアドレスは既に使用されています。')
              break
            case 'auth/weak-password':
              setErrorText('パスワードが適切ではありません。')
              break
            case 'auth/user-disabled':
              setErrorText('アカウントが無効です。')
              break
          }
        })
    })
  }, [email, password])

  const onClickCancel = useCallback(() => {
    console.log('close')
  }, [])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
    onClickCancel,
    validation,
    onClickGoogleButton,
    enterKeyPress,
    errorText,
  }
}
