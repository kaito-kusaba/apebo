import SafeView from 'components/atoms/SafeView'
import TopPageContainer from 'components/organisms/Containers/TopPageContainer'
import TopSearchContainer from 'components/organisms/Containers/TopSearchContainer'
import TimeLineContainer from 'components/organisms/Containers/TimeLineContainer'
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
