import { RootState } from 'components/redux'
import { doc, DocumentReference, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  textStyle?: string
  containerStyle?: string
}

export default React.memo(function FollowFollower({ textStyle, containerStyle }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const params = useParams()
  const [followers, setFollowers] = useState<number>(0)
  const [follows, setFollows] = useState<number>(0)
  const [ref, setRef] = useState<DocumentReference>(doc(db, 'users', user!.uid))

  const fetchUserData = async () => {
    if (params.uid) {
      setRef(doc(db, 'users', params.uid))
    }
    const userSnap = await getDoc(ref)
    const data = userSnap.data()
    setFollowers(data?.followers ? data?.followers.length : 0)
    setFollows(data?.follows ? data?.follows.length : 0)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

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
