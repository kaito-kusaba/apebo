import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/app'
import { actions as userActions } from 'components/redux/User'
import { actions as modalActions } from 'components/redux/Modal'
import { actions as tabButtonActions } from 'components/redux/TimeLineTab'
import store from 'components/redux/store'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()

onAuthStateChanged(auth, user => {
  const dispatch = store.dispatch
  if (user) {
    dispatch(userActions.setUser(user))
  } else {
    // User is signed out
    dispatch(userActions.clearUser())
    dispatch(modalActions.setModal(false))
    dispatch(tabButtonActions.clearSelected())
  }
})
