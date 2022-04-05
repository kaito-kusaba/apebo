import Header from 'components/organisms/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AppNavigator from './App'
import AuthNavigator from './Auth'
import { useInjection } from './hooks'

export default function RootNavigator() {
  const { user } = useInjection()
  console.log(user)
  return (
    <div>
      {/* user(firebase.User | null)はサインアウト時nullになる */}
      <Router>
        <Header user={user} />
        {user ? <AppNavigator /> : <AuthNavigator />}
        </Router>
    </div>
  )
}
