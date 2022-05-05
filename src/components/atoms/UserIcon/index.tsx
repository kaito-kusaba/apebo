import React from 'react'
import { Link } from 'react-router-dom'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'
import { useStyles } from './style'

interface Props {
  size: UserIconSize
  style?: string
}
// TODO: すでに/account/${user.uid}の時は画像を拡大表示する

export default React.memo(function UserIcon({ size, style }: Props) {
  const { src, user } = useInjection({ size })
  const styles = useStyles()
  const url = `account/${user.uid}`
  return (
    <Link to={url} className={`${styles.iconContainer} ${style}`}>
      <img src={src} width={size} height={size} />
    </Link>
  )
})
