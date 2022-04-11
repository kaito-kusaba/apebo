import React from 'react'
import { useInjection } from './hooks'
import { Routes, Route } from 'react-router-dom'
import TopScreen from 'pages/Top'
import AccountScreen from 'pages/Account'
import ProfileScreen from 'pages/Account/Profile'
import NotificationScreen from 'pages/Notification'
import PostDetailScreen from 'pages/Post/Detail'
import TalkScreen from 'pages/Talk'
import SigninForm from 'components/organisms/Forms/SigninForm'
import SignupForm from 'components/organisms/Forms/SignupForm'
import ResetPasswordScreen from 'pages/Auth/Reset/Password'
import SetUsernameScreen from 'pages/Attr/Username'

export default function MainNavigator() {
    const { user } = useInjection()
    return (
        <Routes>
            {!user || !user.user?.email && (
                <>
                    <Route index element={<SigninForm />} />
                    <Route path="/auth/signup" element={<SignupForm />} />
                    <Route path='/auth/signin' element={<SigninForm />} />
                    <Route path='/auth/reset/password' element={<ResetPasswordScreen />} />
                </>
            )}
            {!user.username && (
                <Route index element={<SetUsernameScreen />} />
            )}
            <Route path='/' element={<TopScreen />} />
            <Route path='/top' element={<TopScreen />} />
            <Route path='/account' element={<AccountScreen />} />
            <Route path='/account/profile' element={<ProfileScreen />} />
            <Route path='/notifications' element={<NotificationScreen />} />
            <Route path='/post/detail/:post_id' element={<PostDetailScreen />} />
            <Route path='/talk/:room_id' element={<TalkScreen />} />
        </Routes>
    )
}