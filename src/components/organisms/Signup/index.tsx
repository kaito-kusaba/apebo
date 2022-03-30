import React from 'react'
import { useInjection } from './hooks'
import './style.css'

export default function Signup() {
  const { email, onChangeEmail, password, onChangePassword, onPressSubmit } =
    useInjection()

  return (
    <div className='signup-container'>
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
      <input type='submit' value='新規登録' onClick={onPressSubmit} />
    </div>
  )
}
