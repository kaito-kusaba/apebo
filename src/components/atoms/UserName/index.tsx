import { RootState } from 'components/redux'
import { PlatformImageArray } from 'constant/Platforms'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useStyles } from './style'

type Props = {
  style?: string
  uid: string
  textStyle?: string
}

export default React.memo(function UserName({ style, uid, textStyle }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const [username, setUsername] = useState<string>(user?.displayName!)
  const [platforms, setPlatforms] = useState<number[]>([])
  const location = useLocation()

  const fetchDatas = async () => {
    const ref = doc(db, 'users', uid)
    const snap = await getDoc(ref)
    const data = snap.data()
    setUsername(data?.username)
    const unAvailablePath = location.pathname.match(/account/)
    if (!unAvailablePath) {
      await setPlatforms(data?.platforms || [])
    }
  }

  useEffect(() => {
    fetchDatas()
  }, [uid])

  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={`${styles.userName} ${textStyle}`}>
        <span>{username ? username : '匿名さん'}</span>
        <div className={styles.platformImageContainer}>
          {platforms.map(platform => {
            return <img key={platform} src={PlatformImageArray[platform]} className={styles.platformImage} alt="" />
          }, [])}
        </div>
      </div>
      <div className={`${styles.userId} ${textStyle}`}>@{uid ? uid : 'anonymous_user'}</div>
    </div>
  )
})
