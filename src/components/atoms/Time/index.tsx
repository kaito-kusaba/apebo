import { Timestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useStyles } from './style'

interface Props {
  time: Timestamp
}

export default React.memo(function Time({ time }: Props) {
  const styles = useStyles()
  const date = time.toDate()
  const [minutes, setMinutes] = useState<number>(date.getMinutes())
  useEffect(() => {
    if (minutes.toString().length === 1) {
      setMinutes(Number('0' + minutes))
    }
  }, [])

  return (
    <span className={styles.time}>
      <span className={styles.date}>{date.toLocaleDateString()}</span>
      <span>
        {date.getHours()}:{minutes}
      </span>
    </span>
  )
})
