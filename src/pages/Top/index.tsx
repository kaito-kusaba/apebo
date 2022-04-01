import React from 'react'
import { auth } from 'assets/firebase'
import Signup from 'components/organisms/Signup'

export default function TopScreen() {
  const email = auth.currentUser?.email
  console.log(email)
  return (
    <div>
      <div>{email && email}</div>
      <Signup />
    </div>
  )
}
