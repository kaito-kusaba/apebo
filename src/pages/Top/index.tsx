import SafeView from 'components/atoms/SafeView'
import TopPageContainer from 'components/organisms/TopPageContainer'
import TopSearchContainer from 'components/organisms/TopSearchContainer'
import TimeLineContainer from 'components/organisms/TimeLineContainer'
import React from 'react'
import Alert from 'components/molecules/Alert'
import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function TopScreen() {
  const styles = useStyles()
  const { isOpen } = useSelector(({ alert }: RootState) => alert)
  return (
    <SafeView style={styles.postContainer}>
      {isOpen && <Alert success text="投稿に成功しました。" />}
      <TopPageContainer left={<TimeLineContainer />} right={<TopSearchContainer />} />
    </SafeView>
  )
})
