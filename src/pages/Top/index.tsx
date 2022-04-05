import { auth } from 'libs/firebase'
import React from 'react'

export default function TopScreen() {
  return (
    <div>{auth.currentUser?.email}</div>

  )
}
