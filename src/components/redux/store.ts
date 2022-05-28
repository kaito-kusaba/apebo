import { combineReducers, createStore } from 'redux'
import { userReducer as user } from './User'
import { modalReducer as modal } from './Modal'
import { alertReducer as alert } from './Alert'
import { timeLineTabReducer as tab } from './TimeLineTab'
import { accountPostsReducer as accountPosts } from './AccountPost'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  user,
  modal,
  tab,
  alert,
  accountPosts,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
