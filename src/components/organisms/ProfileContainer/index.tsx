import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import React, { useEffect, useState } from 'react'
import BioDisplay from '../BioDisplay'
import DiscordID from '../DiscordID'
import FollowFollower from '../FollowFollower'
import { useStyles } from './style'

export default React.memo(function ProfileContainer() {
  const styles = useStyles()
  const [bio, setBio] = useState<string>('')

  useEffect(() => {
    setBio('基本夜の9時からやってます。Apexの他にも色々なゲームもしてます！気軽にDMして下さい！')
  }, [])

  // TODO: fetch datas

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <UserIcon size={72} />
        <UserName style={styles.userName} />
      </div>
      <BioDisplay text={bio} />
      <DiscordID />
      <FollowFollower follows={222} followers={10000} />
    </div>
  )
})
