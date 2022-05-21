import { Timestamp } from 'firebase/firestore'
import React from 'react'
import { useStyles } from './style'

interface Props {
  time: Timestamp
}

export default React.memo(function Time({ time }: Props) {
  const styles = useStyles()
  const date = time.toDate()

  return (
    <span className={styles.time}>
      <span className={styles.date}>{date.toLocaleDateString()}</span>
      <span>
        {date.getHours()}:{date.getMinutes()}
      </span>
    </span>
  )
})
