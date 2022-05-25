import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'
import SettingsScreen from 'pages/Settings'
import SignOutScreen from 'pages/Auth/SignOut'
import NotFoundScreen from 'pages/NotFound'
import SetUsernameScreen from 'pages/Attr/Username'
import UpdateProfileScreen from 'pages/UpdateProfile'
import ChangeEmailScreen from 'pages/ChangeEmail'

export default function MainNavigator() {
  const location = useLocation()
  if (location.pathname === '/auth/signin' || location.pathname === '/auth/signup') {
    return <Navigate to="/" />
  }
  return (
    <Routes>
      <Route index element={<TopScreen />} />
      <Route path="/account" element={<AccountScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/account/:uid" element={<AccountScreen />} />
      <Route path="/auth/signout" element={<SignOutScreen />} />
      <Route path="/attr/username" element={<SetUsernameScreen />} />
      <Route path="/account/settings/profile" element={<UpdateProfileScreen />} />
      <Route path="/account/settings/email" element={<ChangeEmailScreen />} />
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  )
}
