import React, { useEffect, useState } from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useLocation } from 'react-router-dom'

type Props = {
  uid: string
}

export default React.memo(function AccountURL({ uid }: Props) {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
  const [website, setWebsite] = useState<string | undefined>(userData.website)
  const location = useLocation()

  const fetchUserData = async () => {
    if (uid === userData.uniqueId) {
      setWebsite(userData.website)
    } else {
      const userRef = doc(db, 'users', uid)
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
