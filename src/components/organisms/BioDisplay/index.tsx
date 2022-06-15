import { RootState } from 'components/redux'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
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
  const [data, setData] = useState<DocumentData>()

  const fetchUserData = async () => {
    if (params.uid) {
      const userRef = doc(db, 'users', params.uid)
      const userSnap = await getDoc(userRef)
      setData(userSnap.data())
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (location.pathname === `/account/${user!.uid}`) {
    return <pre className={styles.bioDisplay}>{userData.bio}</pre>
  } else {
    return <pre className={styles.bioDisplay}>{data?.bio}</pre>
  }
})
