import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import PostContent from 'components/organisms/ListItems/PostContent'
import ProfileContainer from 'components/organisms/ProfileContainer'
import { RootState } from 'components/redux'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function AccoutScreen() {
  const { username } = useSelector(({ user }: RootState) => user)
  const [label, setLabel] = useState<string>(username)
  const styles = useStyles()

  useEffect(() => {
    if (!username) {
      setLabel('匿名さん')
    }
  }, [username])

  return (
    <SafeView style={styles.containerStyle}>
      <ScreenLabel label={label} />
      <ProfileContainer />
      <PostContent />
    </SafeView>
  )
})
