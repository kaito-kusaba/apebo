import React from 'react'
import { useStyles } from './style'

type Props = {
  text: string
}

export default React.memo(function BioDisplay({ text }: Props) {
  const styles = useStyles()
  return <div className={styles.bioDisplay}>{text}</div>
})
