import React from 'react'
import './style.css'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'

interface Props {
    size: UserIconSize
    href: string
}

export default React.memo(function UserIcon({ size, href }: Props) {
    const { src } = useInjection({ size })
    return <a href={href} className='icon-container'><img src={src} width={size} height={size} /></a>
})