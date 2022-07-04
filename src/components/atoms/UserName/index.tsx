import { GenderImageArray } from 'constant/Genders'
import { PlatformImageArray } from 'constant/Platforms'
import React from 'react'
import { useInjection } from './hooks'

import { useStyles } from './style'

type Props = {
  style?: string
  uid: string
  textStyle?: string
  hasGender?: boolean
  hasPlatform?: boolean
  noDisplayUid?: boolean
}

export default React.memo(function UserName({ style, uid, textStyle, hasGender, hasPlatform, noDisplayUid }: Props) {
  const styles = useStyles()
  const { username, platforms, genders } = useInjection({ hasGender, hasPlatform, uid })

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
      {noDisplayUid ? <></> : <div className={`${styles.userId} ${textStyle}`}>@{uid ? uid : 'anonymous_user'}</div>}
    </div>
  )
})
