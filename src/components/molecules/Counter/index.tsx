import React from 'react'
import { useStyles } from './style'

type Props = {
  maxLength: number
  length: number
  size?: number
}

export default React.memo(function CharacterCounter({ maxLength, length, size }: Props) {
  const styles = useStyles({ size })
  return (
    <div>
      <span className={styles.length()}>
        {length}/{maxLength}
      </span>
    </div>
  )
})
