import Time from 'components/atoms/Time'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButtonSet from 'components/organisms/Button/ActionButtonSet'
import PostContentDisplay from 'components/organisms/Displays/PostContentDisplay'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import React, { useEffect, useState } from 'react'
import { useStyles } from './style'

type Props = {
  docId: string
  uid: string
}

export default function PostDetailContent({ docId, uid }: Props) {
  const styles = useStyles()
  const [data, setData] = useState<DocumentData>()
  const postsTemp: DocumentData[] = []
  const [posts, setPosts] = useState<DocumentData[]>([])

  useEffect(() => {
    const f = async () => {
      const postRef = doc(db, 'posts', docId)
      const postSnap = await getDoc(postRef)
      setData(postSnap.data())
      postsTemp.push({ ...postSnap.data() })
      setPosts(postsTemp)
    }
    f()
  }, [])

  return (
    <>
      {posts.map((post, i) => {
        return (
          <div className={styles.postContentContainerStyle} key={i}>
            <div className={styles.postContentHeader}>
              <div className={styles.postContentUser}>
                <UserIcon uid={uid} size={46} style={styles.postContentUserIcon} disabled />
                <UserName uid={uid} />
              </div>
              <ActionButtonSet docId={docId} uid={uid} />
            </div>
            <PostContentDisplay content={data?.content} style={styles.postContentDisplay} />
            <Time time={post.created_at} />
          </div>
        )
      })}
    </>
  )
}
