import React from 'react'
import { useStyles } from './style'

interface Props {
  style?: string
}

export default React.memo(function PostContentDisplay({ style }: Props) {
  const styles = useStyles()
  return (
    <span className={`${styles.postContentDisplayStyle} ${style}`}>
      今からエペ出来る方居ませんか？？ ダイヤランクです～
    </span>
  )
})
