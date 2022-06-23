import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import PlatformLabel from 'components/molecules/Label/PlatformLabel'
import React from 'react'
import AccountURL from '../../../AccountURL'
import BioDisplay from '../../../BioDisplay'
import DiscordID from '../../../DiscordID'
import FollowFollower from '../../FollowFollowerLinkContainer'
import { useStyles } from './style'
import { AlertProvider } from 'components/molecules/Alert'
import FollowButton from '../../FollowButtonContainer'
import { Navigate, useSearchParams } from 'react-router-dom'
import ActionButtons from 'components/molecules/ActionButtons'

export default function PostDetailProfileContainer() {
  const styles = useStyles()
  const [searchParams] = useSearchParams()

  const doc = searchParams.get('doc')
  const uid = searchParams.get('user')

  if (uid && doc) {
    return (
      <AlertProvider>
        <div className={styles.profileContainer}>
          <ActionButtons uid={uid} />
          <UserIcon uid={uid} size={72} style={styles.icon} disabled hasPlayStyle />
          <UserName uid={uid} hasGender />
          <PlatformLabel containerStyle={styles.PlatformContainer} uid={uid} />
          <BioDisplay uid={uid} />
          <DiscordID uid={uid} />
          <AccountURL uid={uid} />
          <FollowFollower uid={uid} />
          <FollowButton uid={uid} />
        </div>
      </AlertProvider>
    )
  } else {
    return <Navigate to="/*" />
  }
}
