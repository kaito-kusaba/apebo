import { combineReducers, createStore } from 'redux'
import { userReducer as user } from './User'
import { modalReducer as modal } from './Modal'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  user,
  modal,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
