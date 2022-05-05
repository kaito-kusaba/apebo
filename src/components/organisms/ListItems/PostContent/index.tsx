import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/PostContentDisplay'
import React, { useCallback } from 'react'
import { useStyles } from './style'
import Time from 'components/atoms/Time'
import { useNavigate } from 'react-router-dom'

export default React.memo(function PostContent() {
  const styles = useStyles()
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <div onClick={onClick} className={styles.postContentContainerStyle}>
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
