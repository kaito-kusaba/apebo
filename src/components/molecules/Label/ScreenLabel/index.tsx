import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useStyles } from './style'

interface Props {
  label: string | null
}

export default React.memo(function ScreenLabel({ label }: Props) {
  const styles = useStyles()
  const location = useLocation()
  const { posts } = useSelector(({ accountPosts }: RootState) => accountPosts)

  if (location.pathname === '/account') {
    return (
      <div className={styles.screenLabelContainer}>
        <div>
          <h1 className={styles.screenLabel}>{label}</h1>
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
