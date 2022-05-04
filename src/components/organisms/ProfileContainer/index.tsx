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
  const [discordId, setDiscordId] = useState<string>('')

  useEffect(() => {
    setBio('基本夜の9時からやってます。Apexの他にも色々なゲームもしてます！気軽にDMして下さい！')
    setDiscordId('ringosi#0745')
  }, [])

  // TODO: fetch datas

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <UserIcon size={72} />
        <UserName style={styles.userName} />
      </div>
      <BioDisplay text={bio} />
      <DiscordID discordId={discordId} />
      <FollowFollower follows={222} followers={10000} />
    </div>
  )
})
