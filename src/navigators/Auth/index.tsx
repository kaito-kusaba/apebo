import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SigninScreen from 'pages/Auth/Signin'
import SignupScreen from 'pages/Auth/Signup'
import ForgotPasswordScreen from 'pages/ForgotPassword'
import TopScreen from 'pages/Top'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route index element={<TopScreen />} />
      <Route path="/auth/signin" element={<SigninScreen />} />
      <Route path="/auth/signup" element={<SignupScreen />} />
      <Route path="/auth/forgot/password" element={<ForgotPasswordScreen />} />
      <Route path="/*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  )
}
