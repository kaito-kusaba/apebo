import { auth } from 'libs/firebase'
import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'types/User'
import './style.css'

interface Props {
  user: User
}

export default function Header({user}: Props) {
    return <header className='header'>
        <p>email: {user?.email}</p>
        <nav>
          <Link to="/">ホーム</Link>
          {!auth.currentUser && (
            <>
                <Link to="/auth/signin">サインイン</Link>
                <Link to="/auth/signup">新規登録</Link>
            </>
          )}
          
        </nav>
    </header>
}