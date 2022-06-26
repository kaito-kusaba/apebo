import React from 'react'
import { useStyles } from './style'

type Props = {
  label: string
  onChange: () => void
}

export default function SearchButtonLabel({ label, onChange }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <button onClick={onChange} className={styles.checkbox}>
        <span>すべて選ぶ</span>
      </button>
    </div>
  )
}
