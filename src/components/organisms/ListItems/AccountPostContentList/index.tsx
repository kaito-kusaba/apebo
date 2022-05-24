import React from 'react'
import { useInjection } from './hooks'
import PostContent from '../PostContent'

export default React.memo(function PostContentList() {
  const { posts, onClick } = useInjection()
  return (
    <>
      {posts.map(post => {
        return (
          <PostContent
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
