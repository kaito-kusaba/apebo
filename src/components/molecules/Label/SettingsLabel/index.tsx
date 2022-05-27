import React from 'react'
import { useStyles } from './style'

type Props = {
  label: string
}

export default React.memo(function SettingsLabel({ label }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
    </div>
  )
})
