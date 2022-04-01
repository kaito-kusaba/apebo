import { BrowserRouter as Router } from 'react-router-dom'
import AppNavigator from './App'
import AuthNavigator from './Auth'
import { useInjection } from './hooks'

export default function RootNavigator() {
  const { user } = useInjection()
  return (
    <div>
      <Router>{user !== null ? <AppNavigator /> : <AuthNavigator />}</Router>
    </div>
  )
}
