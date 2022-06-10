import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlatformLabel from 'components/molecules/Label/PlatformLabel'
import { RootState } from 'components/redux'
import React from 'react'
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
  const { user } = useSelector(({ user }: RootState) => user)
  const location = useLocation()

  const ActionButtons: React.VFC = () => {
    if (location.pathname === '/account' || user?.uid === urlParams.uid) {
      return (
        <div className={styles.actionButtons}>
          <ActionButton type="Other" />
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
      <PlatformLabel containerStyle={styles.PlatformContainer} />
      <BioDisplay />
      <DiscordID />
      <AccountURL />
      <FollowFollower />
    </div>
  )
}
