import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, getRedirectResult } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
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
const dispatch = store.dispatch

const fetchUserData = async (uid: string) => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)
  const data = userSnap.data()
  if (data) {
    dispatch(
      userActions.setUserData({
        username: data.username,
        uniqueId: data.unique_id,
        icon: data.icon,
        bio: data.bio,
        website: data.website,
        discordId: data.discord_id,
        follows: data.follows,
        followers: data.followers,
        platforms: data.platforms,
        talk_rooms: data.talk_rooms,
      }),
    )
  }
}

const getRedirectWithGoogle = async () => {
  getRedirectResult(auth).then(async res => {
    // INFO: ログイン・新規登録するたびにデータが上書きされてしまう。
    // 新規登録時のみ(中身がないときだけ)データを追加して、それ以外は何も加えない
    if (res?.user) {
      const myRef = doc(db, 'users', res.user.uid)
      const mySnap = await getDoc(myRef)
      if (!mySnap.data()?.unique_id) {
        const user = res.user
        const data = {
          unique_id: user.uid,
          username: user.displayName,
          icon: user.photoURL,
        }
        dispatch(userActions.setUser(user))
        setDoc(doc(db, 'users', user.uid), data)
      }
    }
  })
}

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in
    fetchUserData(user.uid)
    getRedirectWithGoogle()
    dispatch(userActions.setUser(user))
  } else {
    // User is signed out
    dispatch(userActions.clearUser())
    dispatch(modalActions.setModal(false))
    dispatch(tabButtonActions.clearSelected())
  }
})
