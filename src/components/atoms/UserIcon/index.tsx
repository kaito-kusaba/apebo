import React from 'react'
import type { UserIconSize } from 'types/UserIconSize'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  uid: string
  size: UserIconSize
  style?: string
  disabled?: boolean
  spread?: boolean
  hasPlayStyle?: boolean
  img?: string
}
// TODO: すでに/account/${user.uid}の時は画像を拡大表示する

export default React.memo(function UserIcon({ size, disabled, style, uid, hasPlayStyle, spread, img }: Props) {
  const { src, onClick, playStyleImg, disable, isNotPostScreen } = useInjection({ size, uid, hasPlayStyle, spread })
  const styles = useStyles({ size, disable, isNotPostScreen })

  if (disabled) {
    return (
      <div className={`${styles.iconContainer} ${style}`}>
        <img className={styles.icon} src={img ?? src} alt="" />
        {hasPlayStyle && <img className={styles.playStyle()} src={playStyleImg} alt="" />}
      </div>
    )
  } else {
    return (
      <button onClick={onClick} className={`${styles.iconContainer} ${style}`}>
        <img className={styles.icon} src={img ?? src} alt="" />
        {hasPlayStyle && <img className={styles.playStyle()} src={playStyleImg} alt="" />}
      </button>
    )
  }
})
