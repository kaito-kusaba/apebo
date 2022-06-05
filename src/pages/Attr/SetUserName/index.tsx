import React from 'react'
import SetUsernameContainer from 'components/organisms/UsernameContainer'
import { AlertProvider } from 'components/molecules/Alert'

export default function SetUserNameScreen() {
  return (
    <AlertProvider>
      <SetUsernameContainer />
    </AlertProvider>
  )
}
