import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TopScreen from 'pages/Top'
import PostDetailScreen from 'pages/Post/Detail'
import AccountScreen from 'pages/Account'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route index element={<TopScreen />} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/post" element={<PostDetailScreen />} />
      <Route path="/account/:uid" element={<AccountScreen />} />
    </Routes>
  )
}
