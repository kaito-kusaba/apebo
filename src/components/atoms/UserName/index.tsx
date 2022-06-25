import { RootState } from 'components/redux'
import { GenderImageArray } from 'constant/Genders'
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
  hasGender?: boolean
}

export default React.memo(function UserName({ style, uid, textStyle, hasGender }: Props) {
  const styles = useStyles()
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const [username, setUsername] = useState<string>(user?.displayName!)
  const [platforms, setPlatforms] = useState<number[]>([])
  const location = useLocation()
  const [genders, setGenders] = useState<number[]>([])

  const fetchDatas = async () => {
    const isUnAvailable = location.pathname.match(/account/) || location.pathname.match(/post/)
    if (uid === userData.uniqueId) {
      setUsername(userData.username!)
      if (!isUnAvailable) {
        setPlatforms(userData.platforms || [])
      }
      if (hasGender) {
        setGenders(userData.genders || [])
      }
    } else {
      const ref = doc(db, 'users', uid)
      const snap = await getDoc(ref)
      const data = snap.data()
      setUsername(data?.username)
      if (!isUnAvailable) {
        setPlatforms(data?.platforms || [])
      }
      if (hasGender) {
        setGenders(data?.genders || [])
      }
    }
  }

  useEffect(() => {
    fetchDatas()
  }, [uid, location.pathname])

  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={`${styles.userName} ${textStyle}`}>
        <span>{username ? username : '匿名さん'}</span>
        <div className={styles.genderImageContainer}>
          {genders.map(gender => {
            return <img key={gender} src={GenderImageArray[gender]} alt="" className={styles.genderImage} />
          })}
        </div>
        <div className={styles.platformImageContainer}>
          {platforms.map(platform => {
            return <img key={platform} src={PlatformImageArray[platform]} className={styles.platformImage} alt="" />
          })}
        </div>
      </div>
      <div className={`${styles.userId} ${textStyle}`}>@{uid ? uid : 'anonymous_user'}</div>
    </div>
  )
})
