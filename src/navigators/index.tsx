import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigator from './Main'
import NavigationBar from 'components/organisms/NavigationBar'

export default function RootNavigator() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <MainNavigator />
      </Router>
    </div>
  )
}
