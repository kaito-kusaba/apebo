import React from 'react'
import PostContent from 'components/organisms/ListItems/PostContent'
import { useInjection } from './hooks'

export default React.memo(function PostContentList() {
  const { posts } = useInjection()
  return (
    <>
      {posts.map(post => {
        return (
          <PostContent key={post.id} docId={post.id} uid={post.user_id} content={post.content} time={post.created_at} />
        )
      })}
    </>
  )
})
