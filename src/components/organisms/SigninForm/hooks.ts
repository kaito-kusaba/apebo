import { useCallback, useState } from 'react'
import { auth } from 'libs/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onPressSubmit = useCallback(() => {
      signInWithEmailAndPassword(auth, email, password) 
  }, [email, password])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
  }
}
