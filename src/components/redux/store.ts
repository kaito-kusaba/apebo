import { createStore } from 'redux'
import { userReducer as user } from './User'

const store = createStore(user)

export default store
