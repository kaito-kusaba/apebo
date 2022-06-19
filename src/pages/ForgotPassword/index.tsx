import React from 'react'
import ForgotPasswordContainer from 'components/organisms/Containers/ForgotPasswordContainer'
import { AlertProvider } from 'components/molecules/Alert'

export default function ForgotPasswordScreen() {
  return (
    <AlertProvider>
      <ForgotPasswordContainer />
    </AlertProvider>
  )
}
