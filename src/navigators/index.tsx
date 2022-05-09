import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigator from './Main'
import NavigationBar from 'components/organisms/NavigationBar'
import React from 'react'
import AuthNavigator from './Auth'
import { useInjection } from './hooks'

export default React.memo(function RootNavigator() {
  const { user } = useInjection()
  // console.log(JSON.stringify(user))
  if (user.uid) {
    return (
      <Router>
        <NavigationBar />
        <MainNavigator />
      </Router>
    )
  } else {
    return (
      <Router>
        <AuthNavigator />
      </Router>
    )
  }
})
