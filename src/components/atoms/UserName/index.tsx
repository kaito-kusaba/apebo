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
  isDisplayUid?: boolean
  disabled?: boolean
}

export default React.memo(function UserName({
  style,
  uid,
  textStyle,
  hasGender,
  hasPlatform,
  isDisplayUid,
  disabled,
}: Props) {
  const styles = useStyles({ disabled })
  const { username, platforms, genders, onClick } = useInjection({ hasGender, hasPlatform, disabled, uid })

  return (
    <div className={`${styles.userNameContainerStyle} ${style}`}>
      <div className={`${styles.userName()} ${textStyle}`} onClick={onClick}>
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
      {isDisplayUid ? <div className={`${styles.userId} ${textStyle}`}>@{uid ?? 'anonymous_user'}</div> : <></>}
    </div>
  )
})
