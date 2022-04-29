import React from 'react'
import './style.css'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'

interface Props {
  size: UserIconSize
}

export default React.memo(function UserIcon({ size }: Props) {
  const { src, user } = useInjection({ size })
  const url = `account/${user.uid}`
  return (
    <a href={url} className="icon-container">
      <img src={src} width={size} height={size} />
    </a>
  )
})
