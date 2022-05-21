import React from 'react'
import { useStyles } from './style'

interface Props {
  content: string
  style?: string
}

export default React.memo(function PostContentDisplay({ style, content }: Props) {
  const styles = useStyles()

  return <span className={`${styles.postContentDisplayStyle} ${style}`}>{content}</span>
})
