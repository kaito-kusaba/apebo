import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import FollowFollowersListContainer from 'components/organisms/Containers/FollowFollowersListContainer'
import FollowFollowersListPageContainer from 'components/organisms/Containers/FollowFollowersListPageContainer'
import ProfileContainer from 'components/organisms/Containers/ProfileContainer/Account'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import React from 'react'

export default function FollowFollowersListScreen() {
  window.scroll({ top: 0 })

  return (
    <SafeView>
      <ScreenLabel />
      <FollowFollowersListPageContainer
        left={<ProfileContainer />}
        center={<FollowFollowersListContainer />}
        right={<RecommendationContent />}
      />
    </SafeView>
  )
}
