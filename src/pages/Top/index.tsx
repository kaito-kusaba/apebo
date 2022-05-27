import SafeView from 'components/atoms/SafeView'
import TopPageContainer from 'components/organisms/TopPageContainer'
import TopSearchContainer from 'components/organisms/TopSearchContainer'
import TimeLineContainer from 'components/organisms/TimeLineContainer'
import React from 'react'
import { useStyles } from './style'
import { AlertProvider } from 'components/molecules/Alert'

export default React.memo(function TopScreen() {
  const styles = useStyles()

  return (
    <AlertProvider>
      <SafeView style={styles.postContainer}>
        <TopPageContainer left={<TimeLineContainer />} right={<TopSearchContainer />} />
      </SafeView>
    </AlertProvider>
  )
})
