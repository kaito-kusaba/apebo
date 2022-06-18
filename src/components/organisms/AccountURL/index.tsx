import React, { useEffect, useState } from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useLocation, useParams } from 'react-router-dom'

export default React.memo(function AccountURL() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
  const [website, setWebsite] = useState<string | undefined>(userData.website)
  const params = useParams()
  const location = useLocation()

  const fetchUserData = async () => {
    if (params.uid === userData.uniqueId) {
      setWebsite(userData.website)
    } else {
      const userRef = doc(db, 'users', params.uid!)
      const userSnap = await getDoc(userRef)
      setWebsite(userSnap.data()?.website)
    }
  }

  const WebsiteImg: React.VFC = () => {
    return <img src={LinkIconGray} alt="" className={styles.img} />
  }

  useEffect(() => {
    fetchUserData()
  }, [location.pathname])

  if (website) {
    return (
      <div className={styles.container}>
        <WebsiteImg />
        <a href={website} target="_blank" rel="noreferrer" className={styles.url}>
          {website}
        </a>
      </div>
    )
  } else {
    return <></>
  }
})
