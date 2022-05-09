import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import SigninScreen from 'pages/Auth/Signin'
import SignupScreen from 'pages/Auth/Signup'

export default function AuthNavigator() {
  const location = useLocation()
  if (location.pathname === '/') {
    return <Navigate to="/auth/signin" />
  }
  return (
    <Routes>
      <Route path="/auth/signin" element={<SigninScreen />} />
      <Route path="/auth/signup" element={<SignupScreen />} />
    </Routes>
  )
}
