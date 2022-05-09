import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContent from 'components/organisms/ListItems/PostContent'
import TimeLineTabList from 'components/organisms/ListItems/TimeLineTabList'
import { auth } from 'libs/firebase'
import React, { useCallback } from 'react'
import { useStyles } from './style'

export default React.memo(function TopScreen() {
  const styles = useStyles()

  const signOut = useCallback(() => {
    auth.signOut()
  }, [])

  return (
    <SafeView style={styles.postContainer}>
      <ScreenLabel label="ホーム" />
      <TimeLineTabList />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <button onClick={signOut}>ssssssignout</button>
    </SafeView>
  )
})
