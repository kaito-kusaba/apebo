import { auth } from 'libs/firebase'
import React, { useEffect } from 'react'

export default function SignOutScreen() {
  useEffect(() => {
    auth.signOut()
  }, [])
  return (
    <div>
      <p>サインアウトしました。</p>
      <a href="/auth/signin">サインインまたは新規登録</a>
    </div>
  )
}
