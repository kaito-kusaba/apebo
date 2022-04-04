import { useCallback, useState } from 'react'
import { auth } from 'assets/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/User'
import { getAuthError } from 'utils'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onPressSubmit = useCallback(async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password) 
    } catch (e) {
      getAuthError(e)
    }
     finally {
      const user = auth.currentUser
      dispatch(actions.setUser(user))
    }
  }, [dispatch, email, password])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
  }
}
