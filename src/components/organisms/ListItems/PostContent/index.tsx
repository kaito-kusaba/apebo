import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/PostContentDisplay'
import React from 'react'
import { useStyles } from './style'
import Time from 'components/atoms/Time'

export default React.memo(function PostContent() {
  const styles = useStyles()
  return (
    <div className={styles.postContentContainerStyle}>
      <div className={styles.postContentHeader}>
        <div className={styles.postContentUser}>
          <UserIcon size={46} style={styles.postContentUserIcon} />
          <UserName />
        </div>
        <ActionButtonSet />
      </div>
      <PostContentDisplay style={styles.postContentDisplay} />
      <Time />
    </div>
  )
})
