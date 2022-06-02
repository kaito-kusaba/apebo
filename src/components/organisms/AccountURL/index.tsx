import React, { useEffect, useState } from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import { useParams } from 'react-router-dom'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export default React.memo(function AccountURL() {
  const styles = useStyles()
  const params = useParams()
  const [data, setData] = useState<DocumentData>()
  const { userData } = useSelector(({ user }: RootState) => user)

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
      <a href={params.uid ? data?.website : userData.website} target="_blank" rel="noreferrer" className={styles.url}>
        {params.uid ? data?.website : userData.website}
      </a>
    </div>
  )
})
