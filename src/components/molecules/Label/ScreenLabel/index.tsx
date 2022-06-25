import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

type Props = {
  label?: string
}

export default React.memo(function ScreenLabel({ label }: Props) {
  const styles = useStyles()
  const { username, posts } = useInjection()

  if (username) {
    return (
      <div className={styles.screenLabelContainer}>
        <div>
          <h1 className={styles.screenLabel}>{username}</h1>
          <span className={styles.screenLabelSubTitle}>{posts.length}件の投稿</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.screenLabelContainer}>
        <h1 className={styles.screenLabel}>{label}</h1>
      </div>
    )
  }
})
