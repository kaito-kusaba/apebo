import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'
import SettingsScreen from 'pages/Settings'
import SignOutScreen from 'pages/Auth/SignOut'
import NotFoundScreen from 'pages/NotFound'
import SetUsernameScreen from 'pages/Attr/Username'

export default function MainNavigator() {
  return (
    <Routes>
      <Route index element={<TopScreen />} />
      <Route path="/account" element={<AccountScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/account/:uid" element={<AccountScreen />} />
      <Route path="/auth/signout" element={<SignOutScreen />} />
      <Route path="/attr/username" element={<SetUsernameScreen />} />
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  )
}
