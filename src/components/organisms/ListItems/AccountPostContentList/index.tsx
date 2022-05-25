import React from 'react'
import { useInjection } from './hooks'
import AccountPostContent from '../AccountPostContent'

export default React.memo(function AccountPostContentList() {
  const { posts, onClick } = useInjection()
  return (
    <>
      {posts.forEach(post => {
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
    </>
  )
})
