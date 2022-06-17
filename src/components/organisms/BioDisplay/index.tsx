import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { useStyles } from './style'

export default React.memo(function BioDisplay() {
  const styles = useStyles()
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const params = useParams()
  const location = useLocation()
  const [bio, setBio] = useState<string | undefined>(userData.bio)

  const fetchUserData = async () => {
    if (!(params.uid === user!.uid)) {
      const userRef = doc(db, 'users', params.uid!)
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
    return <pre className={styles.bioDisplay}>{bio}</pre>
  } else {
    return <></>
  }
})
