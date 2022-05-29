import React from 'react'
import { useStyles } from './style'

type Props = {
  left: React.ReactNode
  right: React.ReactNode
}

export default React.memo(function TalkPageContainer({ left, right }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {left}
      {right}
    </div>
  )
})
