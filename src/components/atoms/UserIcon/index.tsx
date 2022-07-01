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
}
// TODO: すでに/account/${user.uid}の時は画像を拡大表示する

export default React.memo(function UserIcon({ size, disabled, style, uid, hasPlayStyle, spread }: Props) {
  const { src, onClick, playStyleImg, playStyleHidden, isNotPostScreen } = useInjection({
    size,
    uid,
    hasPlayStyle,
    spread,
  })
  const styles = useStyles({ size, playStyleHidden, isNotPostScreen, disabled })

  if (disabled) {
    return (
      <div className={`${styles.iconContainer()} ${style}`}>
        <img className={styles.icon} src={src} alt="" />
        {hasPlayStyle && <img className={styles.playStyle()} src={playStyleImg} alt="" />}
      </div>
    )
  } else {
    return (
      <button onClick={onClick} className={`${styles.iconContainer()} ${style}`}>
        <img className={styles.icon} src={src} alt="" />
        {hasPlayStyle && <img className={styles.playStyle()} src={playStyleImg} alt="" />}
      </button>
    )
  }
})
