import BackButtonLabel from 'components/molecules/Label/BackButtonLabel'
import PostDetailContent from 'components/organisms/ListItems/PostDetailContent'
import React from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

export default function PostDetailContainer() {
  const [searchParams] = useSearchParams()
  const docId = searchParams.get('doc')
  const uid = searchParams.get('user')

  if (docId && uid) {
    return (
      <div>
        <BackButtonLabel label="投稿" />
        <PostDetailContent docId={docId} uid={uid} />
      </div>
    )
  } else {
    return <Navigate to="/*" />
  }
}
