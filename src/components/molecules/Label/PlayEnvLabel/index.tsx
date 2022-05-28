import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  containerStyle?: string
  textStyle?: string
}

export default function PlayEnvLabel({ containerStyle, textStyle }: Props) {
  const { envs, imgs } = useInjection()
  const styles = useStyles()

  return (
    <div className={containerStyle}>
      <div className={styles.imgContainer}>
        {imgs.map(img => {
          return <img key={img} src={img} alt="" className={styles.img} />
        })}
      </div>
      {envs.map(env => {
        return (
          <span key={env} className={`${styles.text} ${textStyle}`}>
            {env}
            <span className={styles.slash}>{!envs[envs.length] && '/'}</span>
          </span>
        )
      })}
      <span className={`${styles.text} ${textStyle}`}>{envs.length > 0 && 'でプレイできます'}</span>
    </div>
  )
}
