import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlayEnvLabel from 'components/molecules/Label/PlayEnvLabel'
import { RootState } from 'components/redux'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AccountURL from '../AccountURL'
import BioDisplay from '../BioDisplay'
import DiscordID from '../DiscordID'
import FollowFollower from '../FollowFollower'
import { useStyles } from './style'

export default React.memo(function ProfileContainer() {
  const styles = useStyles()
  const [bio, setBio] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)

  useEffect(() => {
    setBio('基本夜の9時からやってます。Apexの他にも色々なゲームもしてます！気軽にDMして下さい！')
  }, [])

  return (
    <div className={styles.profileContainer}>
      <UserIcon uid={user!.uid} size={72} style={styles.icon} />
      <UserName uid={user!.uid} />
      <PlayEnvLabel containerStyle={styles.playEnvContainer} />
      <BioDisplay text={bio} />
      <DiscordID />
      <AccountURL />
      <FollowFollower follows={222} followers={1000} />
    </div>
  )
})
