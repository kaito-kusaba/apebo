import { useCallback, useState } from 'react'
import { auth } from 'libs/firebase'
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/User'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onPressSubmit = useCallback(() => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        dispatch(actions.setUser(user))
        navigate('/')
      }).catch((error) => {
        console.log(`signUpError --- ${error}`)
      })
    })
    
  }, [email, password])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
  }
}
