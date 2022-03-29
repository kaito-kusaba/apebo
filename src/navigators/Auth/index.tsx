import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupScreen from 'pages/Auth/Signup'
import SigninScreen from 'pages/Auth/Signin'
import ConfirmScreen from 'pages/Auth/Signup/Confirm'
import UsernameScreen from 'pages/Auth/Signup/Username'
import ResetPasswordScreen from 'pages/Auth/Reset/Password'
import TopScreen from 'pages/Top'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route path='/' element={<TopScreen />} />
      <Route path='/auth/signup' element={<SignupScreen />} />
      <Route path='/auth/signup/confirm' element={<ConfirmScreen />} />
      <Route path='/auth/signup/username' element={<UsernameScreen />} />
      <Route path='/auth/signin' element={<SigninScreen />} />
      <Route path='/auth/reset/password' element={<ResetPasswordScreen />} />
    </Routes>
  )
}
