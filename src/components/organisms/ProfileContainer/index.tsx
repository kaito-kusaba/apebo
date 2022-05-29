import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlayEnvLabel from 'components/molecules/Label/PlayEnvLabel'
import { RootState } from 'components/redux'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AccountURL from '../AccountURL'
import BioDisplay from '../BioDisplay'
import ActionButton from 'components/molecules/Button/Action'
import DiscordID from '../DiscordID'
import FollowFollower from '../FollowFollower'
import { useStyles } from './style'
import { useLocation, useParams } from 'react-router-dom'

export default function ProfileContainer() {
  const urlParams = useParams<{ uid: string }>()
  const styles = useStyles()
  const [bio, setBio] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)
  const location = useLocation()

  useEffect(() => {
    setBio('基本夜の9時からやってます。Apexの他にも色々なゲームもしてます！気軽にDMして下さい！')
  }, [])

  const onClickOther = useCallback(() => {
    alert('プロフィール編集')
  }, [])

  const ActionButtons: React.VFC = () => {
    if (location.pathname === '/account' || user?.uid === urlParams.uid) {
      return (
        <div className={styles.actionButtons}>
          <ActionButton type="Other" onClickOther={onClickOther} />
        </div>
      )
    } else {
      return (
        <div className={styles.actionButtons}>
          <ActionButton type="Message" />
          <ActionButton type="Other" />
        </div>
      )
    }
  }

  return (
    <div className={styles.profileContainer}>
      <ActionButtons />
      <UserIcon uid={urlParams.uid ? urlParams.uid : user!.uid} size={72} style={styles.icon} />
      <UserName uid={urlParams.uid ? urlParams.uid : user!.uid} />
      <PlayEnvLabel containerStyle={styles.playEnvContainer} />
      <BioDisplay text={bio} />
      <DiscordID />
      <AccountURL />
      <FollowFollower follows={222} followers={1000} />
    </div>
  )
}
