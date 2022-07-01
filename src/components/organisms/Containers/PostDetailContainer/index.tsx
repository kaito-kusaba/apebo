import BackButtonLabel from 'components/molecules/Label/BackButtonLabel'
import PostDetailContent from 'components/organisms/ListItems/PostDetailContent'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useInjection } from './hooks'

export default function PostDetailContainer() {
  const { docId, uid, onClick } = useInjection()
  if (docId && uid) {
    return (
      <div>
        <BackButtonLabel label="投稿" onClick={onClick} />
        <PostDetailContent docId={docId} uid={uid} />
      </div>
    )
  } else {
    return <Navigate to="/*" />
  }
}
