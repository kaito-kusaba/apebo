import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'
import SettingsScreen from 'pages/Settings'
import PostScreen from 'pages/Post'

export default function MainNavigator() {
  return (
    <Routes>
      <Route path="/" element={<TopScreen />} />
      <Route path="/account" element={<AccountScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/post" element={<PostScreen />} />
    </Routes>
  )
}
