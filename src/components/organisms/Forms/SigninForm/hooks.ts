import { useCallback, useEffect, useState } from 'react'
import { auth } from 'libs/firebase'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ValidationType } from 'types/ValidationType'
import { validatePassword } from 'utils/validator'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/User'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [validation, setValidation] = useState<ValidationType>('blank')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  useEffect(() => {
    setValidation(validatePassword(password))
  }, [password])

  const onClickCancel = useCallback(() => {
    console.log('close')
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
          console.log(`signInError --- ${error}`)
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
  }
}
