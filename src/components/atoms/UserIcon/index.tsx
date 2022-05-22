import React from 'react'
import { Link } from 'react-router-dom'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'
import { useStyles } from './style'

interface Props {
  size: UserIconSize
  style?: string
  disabled?: boolean
  uid: string
}
// TODO: すでに/account/${user.uid}の時は画像を拡大表示する

export default React.memo(function UserIcon({ size, disabled, style, uid }: Props) {
  const { src, user } = useInjection({ size, uid })
  const styles = useStyles()
  const url = `/account/${user?.uid}`
  if (disabled) {
    return (
      <div className={`${styles.iconContainer} ${style}`}>
        <img className={styles.icon} src={src} width={size} height={size} />
      </div>
    )
  } else {
    return (
      <Link to={url} className={`${styles.iconContainer} ${style}`}>
        <img className={styles.icon} src={src} width={size} height={size} />
      </Link>
    )
  }
})
