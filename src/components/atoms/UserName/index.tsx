import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useStyles } from './style'

interface Props {
  style?: string
  uid: string
}

export default React.memo(function UserName({ style, uid }: Props) {
  const styles = useStyles()
  const [username, setUsername] = useState<string>('')

  //uidでusersを検索する uid => username
  useEffect(() => {
    const f = async () => {
      const userRef = doc(db, 'users', uid)
      const userSnap = await getDoc(userRef)
      console.log(userSnap.data())
      setUsername(userSnap.data()?.username)
    }
    f()
  }, [])

  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={styles.userName}>{username}</div>
      <div className={styles.userId}>@{uid ? uid : 'anonymous_user'}</div>
    </div>
  )
})
