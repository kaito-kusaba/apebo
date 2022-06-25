import React from 'react'
import { useStyles } from './style'

type Props = {
  left: React.ReactNode
  center: React.ReactNode
  right: React.ReactNode
}

export default React.memo(function PostDetailPageContainer({ left, right, center }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {left}
      {center}
      {right}
    </div>
  )
})
