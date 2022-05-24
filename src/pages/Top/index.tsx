import SafeView from 'components/atoms/SafeView'
import Alert from 'components/molecules/Alert'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContentList from 'components/organisms/ListItems/PostContentList'
import TimeLineTabList from 'components/organisms/ListItems/TimeLineTabList'
import { RootState } from 'components/redux'
import { auth } from 'libs/firebase'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function TopScreen() {
  const styles = useStyles()
  const { isOpen } = useSelector(({ alert }: RootState) => alert)
  const signOut = useCallback(() => {
    auth.signOut()
  }, [])

  return (
    <SafeView style={styles.postContainer}>
      {isOpen && <Alert success text="投稿に成功しました。" />}
      <ScreenLabel label="ホーム" />
      <TimeLineTabList />
      <PostContentList />
      <button onClick={signOut}>signout</button>
    </SafeView>
  )
})
