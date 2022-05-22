import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContentList from 'components/organisms/ListItems/PostContentList'
import ProfileContainer from 'components/organisms/ProfileContainer'
import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'

export default React.memo(function AccoutScreen() {
  const { user } = useSelector(({ user }: RootState) => user)

  return (
    <SafeView>
      <ScreenLabel label={user?.displayName ? user.displayName : '匿名さん'} />
      <ProfileContainer />
      <PostContentList />
    </SafeView>
  )
})
