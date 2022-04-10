import { combineReducers, createStore } from 'redux'
import { userReducer as user } from './User'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  user,
})


const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
