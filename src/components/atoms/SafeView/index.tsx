import React from 'react'
import { useStyles } from './style'

interface Props {
  children?: React.ReactNode
  style?: string
}

export default React.memo(function SafeView({ children, style }: Props) {
  const styles = useStyles()
  return <div className={`${styles.safeViewContainer} ${style}`}>{children}</div>
})
