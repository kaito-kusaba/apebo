import { useCallback, useState } from 'react'
import firebase from 'assets/firebase'

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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('done')
      })
      .catch((error: any) => {
        console.log('エラーが発生しました。再度お試しください。')
        console.log(error)
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
