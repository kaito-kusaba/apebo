import React from 'react'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import TimeLineTabList from 'components/organisms/ListItems/TimeLineTabList'
import PostContentList from 'components/organisms/ListItems/PostContentList'
import { useStyles } from './style'

export default React.memo(function TimeLineContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <ScreenLabel label="ホーム" />
      <TimeLineTabList />
      <PostContentList />
    </div>
  )
})
