import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/PostContentDisplay'
import React from 'react'
import { useStyles } from './style'
import Time from 'components/atoms/Time'
import { useInjection } from './hooks'

export default React.memo(function PostContent() {
  const styles = useStyles()
  const { onClickPost } = useInjection()
  return (
    <button onClick={onClickPost} className={styles.postContentContainerStyle}>
      <div className={styles.postContentHeader}>
        <div className={styles.postContentUser}>
          <UserIcon size={46} style={styles.postContentUserIcon} />
          <UserName />
        </div>
        <ActionButtonSet />
      </div>
      <PostContentDisplay style={styles.postContentDisplay} />
      <Time />
    </button>
  )
})
