import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigator from './Main'
import NavigationBar from 'components/organisms/NavigationBar'

export default function RootNavigator() {
  return (
    <Router>
      <NavigationBar />
      <MainNavigator />
    </Router>
  )
}
