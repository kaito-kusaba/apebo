import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SigninScreen from 'pages/Auth/Signin'
import ResetPasswordScreen from 'pages/Auth/Reset/Password'
import TopScreen from 'pages/Top'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route path='/' element={<TopScreen />} />
      <Route path='/auth/signin' element={<SigninScreen />} />
      <Route path='/auth/reset/password' element={<ResetPasswordScreen />} />
    </Routes>
  )
}
