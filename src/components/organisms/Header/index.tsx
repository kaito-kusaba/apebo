import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useInjection } from './hooks'

export default function Header() {
    const { user } = useInjection()

    return <header className='header'>
        <p>email: {user?.email}</p>
        <nav>
          {user ? (
              <Link to="/">ホーム</Link>
          ) : (
            <>
              <Link to="/">ホーム</Link>
              <Link to="/auth/signin">サインイン</Link>
              <Link to="/auth/signup">新規登録</Link>
            </>
          )}
        </nav>
    </header>
}