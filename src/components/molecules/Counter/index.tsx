import React from 'react'
import { useStyles } from './style'

type Props = {
  maxLength: number
  length: string
  style?: string
}

export default React.memo(function CharacterCounter({ maxLength, length, style }: Props) {
  const styles = useStyles()
  return (
    <div>
      <span className={`${styles.length} ${style}`}>
        {length.length}/{maxLength}
      </span>
    </div>
  )
})
