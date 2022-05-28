import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

interface Props {
  style?: string
  uid: string
  textStyle?: string
}

export default React.memo(function UserName({ style, uid, textStyle }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const [username, setUsername] = useState<string>(user?.displayName!)

  useEffect(() => {
    const f = async () => {
      const userRef = doc(db, 'users', uid)
      const userSnap = await getDoc(userRef)
      setUsername(userSnap.data()?.username)
    }
    f()
  }, [])

  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={`${styles.userName} ${textStyle}`}>{username ? username : '匿名さん'}</div>
      <div className={`${styles.userId} ${textStyle}`}>@{uid ? uid : 'anonymous_user'}</div>
    </div>
  )
})
