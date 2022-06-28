import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlatformLabel from 'components/molecules/Label/PlatformLabel'
import React from 'react'
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

  return (
    <AlertProvider>
      <div className={styles.profileContainer}>
        <ActionButtons uid={params.uid!} />
        <UserIcon uid={params.uid!} size={72} style={styles.icon} hasPlayStyle spread />
        <UserName uid={params.uid!} hasGender />
        <PlatformLabel containerStyle={styles.PlatformContainer} uid={params.uid!} />
        <BioDisplay uid={params.uid!} />
        <DiscordID uid={params.uid!} />
        <AccountURL uid={params.uid!} />
        <FollowFollower uid={params.uid!} />
        <FollowButton uid={params.uid!} />
      </div>
    </AlertProvider>
  )
}
