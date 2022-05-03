import React from 'react'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'
import { useStyles } from './style'

interface Props {
  size: UserIconSize
  style?: string
}

export default React.memo(function UserIcon({ size, style }: Props) {
  const { src, user } = useInjection({ size })
  const styles = useStyles()
  const url = `account/${user.uid}`
  return (
    <a href={url} className={`${styles.iconContainer} ${style}`}>
      <img src={src} width={size} height={size} />
    </a>
  )
})
