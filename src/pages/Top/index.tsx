import { auth } from 'libs/firebase'
import React from 'react'

export default function TopScreen() {
  return (
    <div>Top Screen user: {auth.currentUser?.email}</div>
  )
}
