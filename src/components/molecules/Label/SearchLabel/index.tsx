import React from 'react'
import { useStyles } from './style'

type Props = {
  label?: string
}

export default React.memo(function ScreenLabel({ label }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.screenLabelContainer}>
      <h1 className={styles.screenLabel}>{label}</h1>
    </div>
  )
})
