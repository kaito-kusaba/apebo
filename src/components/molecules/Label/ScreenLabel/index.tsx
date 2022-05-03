import React from 'react'
import { useStyles } from './style'

interface Props {
  label: string | null
}

export default React.memo(function ScreenLabel({ label }: Props) {
  const styles = useStyles()
  return <div className={styles.screenLabel}>{label}</div>
})
