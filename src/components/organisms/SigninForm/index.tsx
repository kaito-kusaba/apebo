import React from 'react'
import { Link } from 'react-router-dom'
import { useInjection } from './hooks'
import './style.css'

export default function SigninForm() {
    const { email, onChangeEmail, password, onChangePassword, onPressSubmit } =
    useInjection()

    return <div className='signin-container'>
    <input
      type='text'
      placeholder='メールアドレス'
      value={email}
      onChange={onChangeEmail}
    />
    <input
      type='password'
      placeholder='パスワード'
      value={password}
      onChange={onChangePassword}
    />
    <input type='submit' value='サインイン' onClick={onPressSubmit} />
    <p>アカウントをお持ちでない方は<Link to="/auth/signup">新規登録</Link></p>
  </div>
}