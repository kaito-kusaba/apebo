import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContentList from 'components/organisms/ListItems/PostContentList'
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
      <PostContentList />
      <button onClick={signOut}>signout</button>
    </SafeView>
  )
})
