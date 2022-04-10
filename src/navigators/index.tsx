import Header from 'components/organisms/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigator from './Main'

export default function RootNavigator() {
  return (
    <div>
      <Router>
        <Header />
        <MainNavigator />
      </Router>
    </div>

  )
}
