import SafeView from 'components/atoms/SafeView'
import { AlertProvider } from 'components/molecules/Alert'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostDetailContainer from 'components/organisms/Containers/PostDetailContainer'
import PostDetailPageContainer from 'components/organisms/Containers/PostDetailPageContainer'
import PostDetailProfileContainer from 'components/organisms/Containers/ProfileContainer/PostDetail'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import React from 'react'
import { useStyles } from './style'

export default React.memo(function PostDetailScreen() {
  const styles = useStyles()

  window.scroll({ top: 0 })
  return (
    <div className={styles.container}>
      <AlertProvider>
        <SafeView>
          <ScreenLabel availableUid />
          <PostDetailPageContainer
            left={<PostDetailProfileContainer />}
            center={<PostDetailContainer />}
            right={<RecommendationContent />}
          />
        </SafeView>
      </AlertProvider>
    </div>
  )
})
