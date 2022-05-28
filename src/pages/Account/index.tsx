import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import AccountPageContainer from 'components/organisms/AccountPageContainer'
import AccountPostContentList from 'components/organisms/ListItems/AccountPostContentList'
import ProfileContainer from 'components/organisms/ProfileContainer'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'

export default React.memo(function AccoutScreen() {
  const { user } = useSelector(({ user }: RootState) => user)

  return (
    <SafeView>
      <ScreenLabel label={user?.displayName ? user.displayName : '匿名さん'} />
      <AccountPageContainer
        left={<ProfileContainer />}
        center={<AccountPostContentList />}
        right={<RecommendationContent />}
      />
    </SafeView>
  )
})
