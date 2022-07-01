import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  uid: string
  style?: string
}

export default React.memo(function BioDisplay({ uid, style }: Props) {
  const styles = useStyles()
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const location = useLocation()
  const [bio, setBio] = useState<string | undefined>(userData.bio)

  const fetchUserData = async () => {
    if (!(uid === user!.uid)) {
      const userRef = doc(db, 'users', uid)
      const userSnap = await getDoc(userRef)
      setBio(userSnap.data()?.bio)
    } else {
      setBio(userData.bio)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [location.pathname])

  if (bio) {
    return <pre className={`${styles.bioDisplay} ${style}`}>{bio}</pre>
  } else {
    return <></>
  }
})
