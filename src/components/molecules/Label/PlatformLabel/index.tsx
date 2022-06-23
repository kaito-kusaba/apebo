import { PlatformImageArray, PlatformKeys } from 'constant/Platforms'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  containerStyle?: string
  textStyle?: string
  uid: string
}

export default function PlatformLabel({ containerStyle, textStyle = '', uid }: Props) {
  const { platforms } = useInjection({ uid })
  const styles = useStyles()

  return (
    <div className={containerStyle}>
      <div className={styles.imgContainer}>
        {platforms.map(platform => {
          return <img key={PlatformKeys[platform]} src={PlatformImageArray[platform]} alt="" className={styles.img} />
        })}
      </div>
      {platforms.map(platform => {
        return (
          <span key={platform} className={`${styles.text} ${textStyle}`}>
            {PlatformKeys[platform]}/
          </span>
        )
      })}
      <span className={`${styles.text} ${textStyle}`}>{platforms.length > 0 && 'でプレイできます'}</span>
    </div>
  )
}
