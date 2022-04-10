import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/app'
import { actions } from 'components/redux/User'
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

initializeApp(firebaseConfig)

export const auth = getAuth()


onAuthStateChanged(auth, (user) => {
  const dispatch = store.dispatch
  if (user) {
    // User is signed in
    dispatch(actions.setUser(user))
  } else {
    // User is signed out
    dispatch(actions.clearUser())
  }
})

