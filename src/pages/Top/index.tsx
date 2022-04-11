import { RootState } from 'components/redux'
import { actions } from 'components/redux/User'
import { auth } from 'libs/firebase'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TopScreen() {
  const dispatch = useDispatch()
  const userName = useSelector(({ user }: RootState) => user.username)

  const handleSignOut = useCallback(() => {
    auth.signOut().then(() => {
      dispatch(actions.clearUser())
  })
  }, [])
  
  return (
    <div>
      <p>TopScreen</p>
      <p>username: {userName}</p>
      <button onClick={handleSignOut}>サインアウト</button>
    </div>
  )
}
