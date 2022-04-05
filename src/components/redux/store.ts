import { createStore } from 'redux'
import { userReducer as user } from './User'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, user)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
