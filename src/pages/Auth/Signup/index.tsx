import React from 'react'
import SignupForm from 'components/organisms/Forms/SignupForm'
import { AlertProvider } from 'components/molecules/Alert'

export default function SignupScreen() {
  return (
    <AlertProvider>
      <SignupForm />
    </AlertProvider>
  )
}
