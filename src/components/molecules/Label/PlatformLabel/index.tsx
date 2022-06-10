import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  containerStyle?: string
  textStyle?: string
}

export default function PlatformLabel({ containerStyle, textStyle }: Props) {
  const { platforms, imgs } = useInjection()
  const styles = useStyles()

  return (
    <div className={containerStyle}>
      <div className={styles.imgContainer}>
        {imgs.map(img => {
          return <img key={img} src={img} alt="" className={styles.img} />
        })}
      </div>
      {platforms.map(platform => {
        return (
          <span key={platform} className={`${styles.text} ${textStyle}`}>
            {platform}
            <span className={styles.slash}>{!platforms[platforms.length] && '/'}</span>
          </span>
        )
      })}
      <span className={`${styles.text} ${textStyle}`}>{platforms.length > 0 && 'でプレイできます'}</span>
    </div>
  )
}
