import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import AccountPageContainer from 'components/organisms/AccountPageContainer'
import AccountPostContentList from 'components/organisms/ListItems/AccountPostContentList'
import ProfileContainer from 'components/organisms/ProfileContainer'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import React from 'react'

export default React.memo(function AccoutScreen() {
  window.scroll({ top: 0 })
  return (
    <SafeView>
      <ScreenLabel />
      <AccountPageContainer
        left={<ProfileContainer />}
        center={<AccountPostContentList />}
        right={<RecommendationContent />}
      />
    </SafeView>
  )
})
