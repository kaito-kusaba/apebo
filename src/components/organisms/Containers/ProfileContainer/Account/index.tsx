import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlatformLabel from 'components/molecules/Label/PlatformLabel'
import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import AccountURL from 'components/organisms/AccountURL'
import BioDisplay from 'components/organisms/BioDisplay'
import DiscordID from 'components/organisms/DiscordID'
import FollowFollower from 'components/organisms/Containers/FollowFollowerLinkContainer'
import { useStyles } from './style'
import { useParams } from 'react-router-dom'
import { AlertProvider } from 'components/molecules/Alert'
import FollowButton from 'components/organisms/Containers/FollowButtonContainer'
import ActionButtons from 'components/molecules/ActionButtons'

export default function ProfileContainer() {
  const styles = useStyles()
  const params = useParams<{ uid: string }>()
  const { user } = useSelector(({ user }: RootState) => user)

  return (
    <AlertProvider>
      <div className={styles.profileContainer}>
        <ActionButtons uid={params.uid ?? user!.uid} />
        <UserIcon uid={params.uid ?? user!.uid} size={72} style={styles.icon} hasPlayStyle spread />
        <UserName uid={params.uid ?? user!.uid} hasGender />
        <PlatformLabel containerStyle={styles.PlatformContainer} uid={params.uid ?? user!.uid} />
        <BioDisplay uid={params.uid ?? user!.uid} />
        <DiscordID uid={params.uid ?? user!.uid} />
        <AccountURL uid={params.uid ?? user!.uid} />
        <FollowFollower uid={params.uid ?? user!.uid} />
        <FollowButton uid={params.uid ?? user!.uid} />
      </div>
    </AlertProvider>
  )
}
