import React, { useEffect, useState } from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useLocation, useParams } from 'react-router-dom'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'

export default React.memo(function AccountURL() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
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
  return (
    <div className={styles.container}>
      <img className={styles.img} src={LinkIconGray} alt="" />
      <a href={userData.website} target="_blank" rel="noopener" className={styles.url}>
        {location.pathname === '/account' ? userData.website : data?.website}
      </a>
    </div>
  )
})
