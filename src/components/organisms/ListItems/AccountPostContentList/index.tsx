import React from 'react'
import { useInjection } from './hooks'
import AccountPostContent from '../AccountPostContent'
import { useStyles } from './style'

export default React.memo(function AccountPostContentList() {
  const { posts, onClick } = useInjection()
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {posts.map(post => {
        return (
          <AccountPostContent
            key={post.id}
            docId={post.id}
            uid={post.user_id}
            content={post.content}
            time={post.created_at}
            onClick={onClick}
          />
        )
      })}
    </div>
  )
})
