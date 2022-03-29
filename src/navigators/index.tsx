import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppNavigator from './App'
import AuthNavigator from './Auth'

export default function RootNavigator() {
  const [user, setUser] = useState()

  useEffect(() => {
    //setUser処理
  }, [])

  return <Router>{user ? <AppNavigator /> : <AuthNavigator />}</Router>
}
