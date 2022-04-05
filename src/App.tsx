import React from 'react'
import RootNavigator from './navigators'
import { useAppStart } from 'libs/firebase'
import store from 'components/redux/store'

function App() {
  useAppStart(store.dispatch)
  return <RootNavigator />
}

export default App
