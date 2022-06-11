import { Timestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useStyles } from './style'

type Props = {
  time: Timestamp
}

export default React.memo(function Time({ time }: Props) {
  const styles = useStyles()
  const date = time.toDate()
  const [minutes, setMinutes] = useState<number | string>(date.getMinutes())
  useEffect(() => {
    if (minutes.toString().length < 2) {
      setMinutes('0' + minutes)
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
