import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResetPasswordScreen from 'pages/Auth/Reset/Password'
import SignupForm from 'components/organisms/SignupForm'
import TopScreen from 'pages/Top'
import SigninForm from 'components/organisms/SigninForm'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route path='/' element={<TopScreen />} />
      <Route path="/auth/signup" element={<SignupForm />} />
      <Route path='/auth/signin' element={<SigninForm />} />
      <Route path='/auth/reset/password' element={<ResetPasswordScreen />} />
    </Routes>
  )
}
