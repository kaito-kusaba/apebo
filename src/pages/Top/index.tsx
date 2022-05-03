import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContent from 'components/organisms/ListItems/PostContent'
import React from 'react'
import { useStyles } from './style'

export default React.memo(function TopScreen() {
  const styles = useStyles()
  return (
    <SafeView style={styles.postContainer}>
      <ScreenLabel label="ホーム" />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </SafeView>
  )
})
