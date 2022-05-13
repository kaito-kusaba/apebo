import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContent from 'components/organisms/ListItems/PostContent'
import ProfileContainer from 'components/organisms/ProfileContainer'
import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'

export default React.memo(function AccoutScreen() {
  const { username } = useSelector(({ username }: RootState) => username)

  return (
    <SafeView>
      <ScreenLabel label={username ? username : '匿名さん'} />
      <ProfileContainer />
      <PostContent />
    </SafeView>
  )
})
