import { useCallback, useState } from 'react'
import { auth } from 'libs/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onPressSubmit = useCallback(async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password) 
      } finally {
        navigate("/")
      }
  }, [email, password])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onPressSubmit,
  }
}
