import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TopScreen from 'pages/Top'

export default function AuthNavigator() {
  return (
    <Routes>
      <Route index element={<TopScreen />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
