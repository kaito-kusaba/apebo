import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  textStyle?: string
  containerStyle?: string
  uid: string
}

export default React.memo(function FollowFollower({ textStyle, containerStyle, uid }: Props) {
  const styles = useStyles()
  const [followers, setFollowers] = useState<number>(0)
  const [follows, setFollows] = useState<number>(0)
  const location = useLocation()

  useEffect(() => {
    const ref = collection(db, 'follows')
    const followCollectionRef = query(ref, where('follow_id', '==', uid))
    onSnapshot(followCollectionRef, querySnapshot => {
      setFollows(querySnapshot.docs.length ?? 0)
    })
    const followerCollectionRef = query(ref, where('follower_id', '==', uid))
    onSnapshot(followerCollectionRef, querySnapshot => {
      setFollowers(querySnapshot.docs.length ?? 0)
    })
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
