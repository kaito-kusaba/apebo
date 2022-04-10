import store from 'components/redux/store'
import { actions } from 'components/redux/User'
import { auth } from 'libs/firebase'
import React, { useCallback } from 'react'

export default function TopScreen() {
  const handleSignOut = useCallback(() => {
    const dispatch = store.dispatch
    auth.signOut()
    dispatch(actions.clearUser())
  }, [])
  return (
    <div>
      <p>TopScreen</p>
      <p>username: {auth.currentUser?.displayName}</p>
      <button onClick={handleSignOut}>サインアウト</button>
    </div>
  )
}
