import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'
import ProfileScreen from 'pages/Account/Profile'
import NotificationScreen from 'pages/Notification'
import PostDetailScreen from 'pages/Post/Detail'
import TalkScreen from 'pages/Talk'

export default function AppNavigator() {
  return (
    <Routes>
      <Route path='/' element={<TopScreen />} />
      <Route path='/account' element={<AccountScreen />} />
      <Route path='/account/profile' element={<ProfileScreen />} />
      <Route path='/notifications' element={<NotificationScreen />} />
      <Route path='/post/detail/:post_id' element={<PostDetailScreen />} />
      <Route path='/talk/:room_id' element={<TalkScreen />} />
    </Routes>
  )
}
