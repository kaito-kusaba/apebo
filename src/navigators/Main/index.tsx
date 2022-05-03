import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'

export default function MainNavigator() {
  return (
    <Routes>
      <Route path="/" element={<TopScreen />} />
      <Route path="/account" element={<AccountScreen />} />
    </Routes>
  )
}
