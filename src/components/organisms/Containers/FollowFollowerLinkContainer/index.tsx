import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  textStyle?: string
  containerStyle?: string
}

export default React.memo(function FollowFollower({ textStyle, containerStyle }: Props) {
  const styles = useStyles()
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const params = useParams()
  const [followers, setFollowers] = useState<number>(0)
  const [follows, setFollows] = useState<number>(0)
  const location = useLocation()

  const fetchUserData = async () => {
    if (params.uid === user!.uid) {
      setFollowers(userData.followers ? userData.followers.length : 0)
      setFollows(userData.follows ? userData.follows.length : 0)
    } else {
      const userRef = doc(db, 'users', params.uid!)
      const userSnap = await getDoc(userRef)
      const data = userSnap.data()
      setFollowers(data?.followers ? data?.followers.length : 0)
      setFollows(data?.follows ? data?.follows.length : 0)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [location.pathname])

  return (
    <div className={`${styles.followFollowerContainer} ${containerStyle}`}>
      <span className={`${styles.followFollowerText} ${textStyle}`}>
        <Link to="/followers" className={styles.followFollowerLink}>
          {String(followers)}
        </Link>
        フォロワー
      </span>
      <span className={`${styles.followFollowerText} ${textStyle}`}>
        <Link to="/following" className={styles.followFollowerLink}>
          {String(follows)}
        </Link>
        フォロー中
      </span>
    </div>
  )
})
